<script lang="ts" setup>
import { ref } from 'vue'
import Alert from '~/components/common/alert/Alert.vue'
import UserListItem from '~/components/users/UserListItem.vue'
import { User } from '~/types'
import { AppStatus } from '~/types/enums'
import { users, usersCount, pending, useUserList } from '~/composables'

const { reset } = useUserList()
const removedUser = ref()
const followedUser = ref()

function onUserRemove(user?: User) {
  if (user) {
    removedUser.value = user
  }
}

function onUserFollow(user?: User) {
  if (user) {
    followedUser.value = user
  }
}
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <div class="users-wrapper">
      <!--User row -->
      <UserListItem
        v-for="user in users"
        v-bind="{ user }"
        :key="user.login"
        @remove="onUserRemove"
        @follow="onUserFollow"
      />
      <!--User row -->

      <a v-if="usersCount < 10" href="#" class="reset" @click.prevent="reset">
        <Transition name="fade" mode="out-in">
          <span v-if="pending" class="w-12 h-12 mx-auto loader" />
          <span v-else>Reset</span>
        </Transition>
      </a>
    </div>
  </div>

  <Teleport to="#alert">
    <Alert
      v-if="removedUser"
      :key="removedUser.login"
      :variant="AppStatus.INFO"
    >
      <span class="font-medium"> {{ removedUser.login }},</span> has been
      removed from list.
    </Alert>

    <Alert
      v-if="followedUser"
      :key="followedUser.login"
      :variant="AppStatus.SUCCESS"
    >
      You've just followed
      <span class="font-medium">
        {{ followedUser.login }}
      </span>
    </Alert>
  </Teleport>
</template>

<style lang="postcss" scoped>
.users-wrapper {
  @apply w-full max-w-lg mx-auto bg-white rounded-xl shadow-xl flex flex-col py-4;
}

.users-wrapper ::v-deep .user:not(:last-child) {
  @apply border-b border-blue-100;
}

.reset {
  @apply flex items-center justify-center w-10/12 h-12 mx-auto px-4 text-center no-underline rounded hover:bg-gray-100 font-medium duration-300;
}
</style>
