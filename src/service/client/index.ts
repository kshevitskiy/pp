import axios, { AxiosResponse } from 'axios'
import { useResponseErrorInterceptor } from './interceptors'

const REQUEST_TIMEOUT = 5000

export const Api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: REQUEST_TIMEOUT
})

// Response
Api.interceptors.response.use(
  (response: AxiosResponse) => response,
  useResponseErrorInterceptor
)
