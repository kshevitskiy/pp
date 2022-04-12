<script lang="ts" setup>
import { apiError } from '~/service'
import AppError from '~/components/system/app-error/AppError.vue'
</script>

<template>
  <RouterView v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <Component :is="Component" />
    </Transition>
  </RouterView>
  <AppError v-model:error="apiError" />
</template>
