<script lang="ts" setup>
import AppError from '~/components/system/AppError.vue'
</script>

<template>
  <RouterView v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <Component :is="Component" />
    </Transition>
  </RouterView>
  <AppError />
</template>
