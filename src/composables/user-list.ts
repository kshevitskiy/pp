import { useService } from '~/service'
import { computed, ref, watch } from 'vue'
import { StorageKeys, useStorage } from '~/composables'
import { User } from '~/types'
import { delay } from '~/assets/utils'

interface UserListModule {
  list(): Promise<void>
  remove(user: User): void
  reset(): void
}

const { getItem, setItem } = useStorage()

export const users = ref<User[]>([])
export const removedUsers = ref<string[]>([])
export const pending = ref(false)

export const usersCount = computed(() =>
  Array.isArray(users.value) ? users.value.length : 0
)

export function useUserList(): UserListModule {
  const since = 0
  const perPage = 10

  watch(removedUsers.value, update, { deep: true })

  function update(): void {
    users.value = users.value.filter(
      (user) => !removedUsers.value.includes(user.login)
    )
  }

  function setRemovedUsers(value: string[]): void {
    removedUsers.value = value
    setItem(StorageKeys.REMOVED_USERS, JSON.stringify(removedUsers.value))
  }

  async function list(): Promise<void> {
    pending.value = true

    try {
      const response = await useService().users.list({
        per_page: perPage,
        since
      })

      // TODO: Refactor. Delay was added for demonstration purpose and should be removed later
      await delay(1000)
      if (Array.isArray(response.data)) {
        users.value = response.data
      }
    } catch (exception) {
      console.error(exception)
    } finally {
      pending.value = false
    }
  }

  function remove(user: User): void {
    const isRemoved = removedUsers.value.includes(user.login)

    if (!isRemoved) {
      removedUsers.value.push(user.login)
      setRemovedUsers(removedUsers.value)
    }
  }

  async function reset() {
    if (removedUsers.value.length > 0) {
      setRemovedUsers([])
      await list()
    }
  }

  return {
    list,
    remove,
    reset
  }
}

export async function initUserList(): Promise<void> {
  try {
    await useUserList().list()

    const removedUsersCollection = JSON.parse(
      getItem(StorageKeys.REMOVED_USERS) || '[]'
    )

    if (Array.isArray(removedUsersCollection)) {
      removedUsers.value.push(...removedUsersCollection)
    }
  } catch (exception) {
    console.error(exception)
  }
}
