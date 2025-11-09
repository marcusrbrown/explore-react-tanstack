import {queryOptions} from '@tanstack/react-query'

export interface User {
  id: number
  name: string
  email: string
}

export const DEPLOY_URL = 'http://localhost:3000'

export const usersQueryOptions = () =>
  queryOptions({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await fetch(`${DEPLOY_URL}/api/users`)
      if (!response.ok) {
        throw new Error('Failed to fetch users')
      }
      return response.json() as Promise<User[]>
    },
  })

export const userQueryOptions = (id: string) =>
  queryOptions({
    queryKey: ['users', id],
    queryFn: async () => {
      const response = await fetch(`${DEPLOY_URL}/api/users/${id}`)
      if (!response.ok) {
        throw new Error('Failed to fetch user')
      }
      return response.json() as Promise<User>
    },
  })
