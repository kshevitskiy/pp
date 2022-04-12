<script lang="ts" setup>
import UserList from '~/components/users/UserList.vue'

import { usersCount } from '~/composables/user-list'
</script>

<template>
  <main class="py-20">
    <header>
      <div class="container mx-auto">
        <h1
          class="my-10 font-medium text-center text-3xl sm:text-4xl font-black"
        >
          Members: {{ usersCount }}
        </h1>
      </div>
    </header>

    <div class="container mx-auto">
      <UserList />
    </div>
  </main>
</template>
