import type {User} from '../utils/users'
import {json} from '@tanstack/react-start'
import {createServerFileRoute} from '@tanstack/react-start/server'

export const ServerRoute = createServerFileRoute('/api/users').methods({
  GET: async ({request}) => {
    console.info('Fetching users... @', request.url)
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = (await res.json()) as User[]

    const list = data.slice(0, 10)

    return json(list.map(u => ({id: u.id, name: u.name, email: u.email})))
  },
})
