import type {User} from '../../utils/users'
import {json} from '@tanstack/react-start'
import {createServerFileRoute} from '@tanstack/react-start/server'

export const ServerRoute = createServerFileRoute('/api/users/$id').methods({
  GET: async ({request, params}) => {
    console.info(`Fetching users by id=${params.id}... @`, request.url)
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      }

      const data = (await res.json()) as User

      return json({
        id: data.id,
        name: data.name,
        email: data.email,
      })
    } catch (error) {
      console.error(error)
      return json({error: 'User not found'}, {status: 404})
    }
  },
})
