import { AxiosError } from 'axios'
import { apiError } from '~/service'

export function useResponseErrorInterceptor(error: AxiosError) {
  apiError.value = {
    status: error.response?.status ?? error.code,
    message: error.message
  }

  return error
}
