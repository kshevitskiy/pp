<script lang="ts" setup>
import { ApiError } from '~/service'
import { computed, ref, watch } from 'vue'
import { AppStatus } from '~/types/enums'
import { delay } from '~/assets/utils'
import Alert from '~/components/common/alert/Alert.vue'

type ErrorDataType<T> = {
  data: T
}

const props = defineProps<{
  error: ApiError | null
}>()

const emit = defineEmits<{ (e: 'update:error', value: null): void }>()

const DEFAULT_DURATION = 3000
const errors = ref<ErrorDataType<ApiError>[]>([])
const hasErrors = computed(() => errors.value.length > 0)

defineExpose({ errors, hasErrors, hideErrors })

watch(
  () => props.error,
  (value) => {
    if (value) {
      errors.value.unshift({
        data: value
      })

      emit('update:error', null)
      hideErrors()
    }
  },
  {
    immediate: true
  }
)

async function hideErrors() {
  await delay(DEFAULT_DURATION)
  errors.value.pop()
}
</script>

<template>
  <Teleport to="#alert">
    <template v-if="hasErrors">
      <Alert
        v-for="(error, index) in errors"
        :key="`${index}-${error.data.status}`"
        :variant="AppStatus.DANGER"
        :collapsible="false"
      >
        <span class="font-medium">Unexpected error:</span>
        {{ error.data.message }}
      </Alert>
    </template>
  </Teleport>
</template>
