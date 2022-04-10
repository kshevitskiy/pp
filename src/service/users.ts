import { Api } from './client'
import { AxiosResponse } from 'axios'

export type ListUsers = {
  since?: number
  per_page?: number
}

export interface UsersService {
  list: (payload?: ListUsers) => Promise<AxiosResponse>
  userFollowers: (login: string) => Promise<AxiosResponse>
}

const users: UsersService = {
  /**
   * Ref.: https://docs.github.com/en/rest/reference/users#list-users
   * @returns User collection
   */
  list: (payload) => Api.get('/users', { params: payload }),

  /**
   * Ref.: https://docs.github.com/en/rest/reference/users#list-followers-of-a-user
   * @returns Followers collection
   */
  userFollowers: (login) => Api.get(`/users/${login}/followers`)
}

export default users
