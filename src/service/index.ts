import { AxiosError } from 'axios'
import { ref } from 'vue'
import users, { UsersService } from './users'

export type ApiError = {
  status?: number | string
  message?: string
}

export interface Service {
  users: UsersService
}

export const apiError = ref<ApiError | null>(null)

export const useService = (): Service => {
  return {
    users
  }
}
