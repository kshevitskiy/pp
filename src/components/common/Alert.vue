<script lang="ts" setup>
import { onMounted, ref } from '@vue/runtime-core'
import { AppStatus } from '~/types/enums'
import { delay } from '~/assets/utils'

const props = withDefaults(
  defineProps<{ variant: AppStatus; collapsible?: boolean }>(),
  {
    variant: AppStatus.INFO,
    collapsible: true
  }
)

const DEFAULT_DURATION = 3000
const visible = ref(true)

onMounted(async () => {
  if (props.collapsible === true) {
    await delay(DEFAULT_DURATION)
    visible.value = false
  }
})
</script>

<template>
  <div
    v-if="visible"
    :class="{
      'alert--info': variant === AppStatus.INFO,
      'alert--danger': variant === AppStatus.DANGER,
      'alert--warning': variant === AppStatus.WARNING,
      'alert--success': variant === AppStatus.SUCCESS
    }"
    class="alert"
    role="alert"
  >
    <svg
      class="w-5 h-5 inline mr-3"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
        clip-rule="evenodd"
      ></path>
    </svg>
    <div>
      <slot />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.alert {
  @apply flex rounded-lg p-4 text-sm;
}

.alert--info {
  @apply bg-blue-100 text-blue-700;
}

.alert--danger {
  @apply bg-red-100 text-red-700;
}

.alert--warning {
  @apply bg-yellow-100 text-yellow-700;
}

.alert--success {
  @apply bg-green-100 text-green-700;
}
</style>
