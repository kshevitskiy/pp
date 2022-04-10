<script lang="ts" setup>
import { User } from '~/types'
import { useUserList } from '~/composables/user-list'
import { ref } from 'vue'

const props = defineProps<{ user?: User }>()
const emit = defineEmits<{
  (e: 'remove', value?: User): void
  (e: 'follow', value?: User): void
}>()

const { remove } = useUserList()
const following = ref(false)

function toggleFollowing() {
  following.value = !following.value

  if (following.value === true) {
    emit('follow', props.user)
  }
}

function handleRemove() {
  if (props.user) {
    remove(props.user)
    emit('remove', props.user)
  }
}
</script>

<template>
  <div :id="user.login" class="user">
    <div
      class="flex flex-col items-center justify-between cursor-pointer p-4 duration-300 sm:flex-row sm:py-4 sm:px-8 hover:bg-purple-50"
    >
      <div
        class="user flex items-center text-center flex-col sm:flex-row sm:text-left"
      >
        <div class="avatar-content mb-2.5 sm:mb-0 sm:mr-2.5">
          <img
            class="avatar w-20 h-20 rounded-full"
            :src="user.avatar_url"
            :alt="user.login"
          />
        </div>
        <div class="user-body flex flex-col mb-4 sm:mb-0 sm:mr-4">
          <a :href="user.html_url" class="title font-medium no-underline">
            {{ user.login }}
          </a>
          <div class="skills flex flex-col">
            <a :href="user.organizations_url" class="subtitle text-slate-500">
              Organizations 💪
            </a>
            <a :href="user.followers_url" class="subtitle text-slate-500">
              Followers
            </a>
          </div>
        </div>
      </div>

      <!--Button content -->
      <div class="user-option space-x-2 mx-auto sm:ml-auto sm:mr-0">
        <button class="btn" type="button" @click.prevent="handleRemove">
          Remove
        </button>
        <button
          type="button"
          class="btn"
          :class="[following ? 'btn-success' : 'btn-primary']"
          @click="toggleFollowing"
        >
          <span v-if="following">Following</span>
          <span v-else>Follow</span>
        </button>
      </div>
      <!--Close Button content -->
    </div>
  </div>
</template>
