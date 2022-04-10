<script lang="ts" setup>
import { Routes } from '~/router'
</script>

<template>
  <main class="flex items-center min-h-screen py-20">
    <header class="w-full">
      <div class="container mx-auto">
        <h1
          class="mb-10 font-medium text-center text-3xl sm:text-4xl font-black"
        >
          GitHub Members App
          <span class="inline-block">😎</span>
        </h1>

        <div class="text-center">
          <RouterLink
            :to="{ name: Routes.Users }"
            class="btn btn-primary btn--lg"
          >
            Explore
          </RouterLink>
        </div>
      </div>
    </header>
  </main>
</template>
