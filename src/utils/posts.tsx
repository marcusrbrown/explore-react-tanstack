import {queryOptions} from '@tanstack/react-query'
import {notFound} from '@tanstack/react-router'
import {createServerFn} from '@tanstack/react-start'

export interface PostType {
  id: string
  title: string
  body: string
}

export const fetchPosts = createServerFn({method: 'GET'}).handler(async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  const data = (await response.json()) as PostType[]
  return data.slice(0, 10)
})

export const postsQueryOptions = () =>
  queryOptions({
    queryKey: ['posts'],
    queryFn: async () => fetchPosts(),
  })

export const fetchPost = createServerFn({method: 'GET'})
  .validator((d: string) => d)
  .handler(async ({data}) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${data}`)

    if (response.status === 404) {
      throw notFound()
    }

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return (await response.json()) as PostType
  })

export const postQueryOptions = (postId: string) =>
  queryOptions({
    queryKey: ['post', postId],
    queryFn: async () => fetchPost({data: postId}),
  })
