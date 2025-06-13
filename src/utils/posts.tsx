import {queryOptions} from '@tanstack/react-query'
import {notFound} from '@tanstack/react-router'
import {createServerFn} from '@tanstack/react-start'
import axios from 'redaxios'

export type PostType = {
  id: string
  title: string
  body: string
}

export const fetchPosts = createServerFn({method: 'GET'}).handler(async () => {
  console.info('Fetching posts...')
  return axios.get<PostType[]>('https://jsonplaceholder.typicode.com/posts').then(r => r.data.slice(0, 10))
})

export const postsQueryOptions = () =>
  queryOptions({
    queryKey: ['posts'],
    queryFn: async () => fetchPosts(),
  })

export const fetchPost = createServerFn({method: 'GET'})
  .validator((d: string) => d)
  .handler(async ({data}) => {
    console.info(`Fetching post with id ${data}...`)
    const post = await axios
      .get<PostType>(`https://jsonplaceholder.typicode.com/posts/${data}`)
      .then(r => r.data)
      .catch(error => {
        console.error(error)
        if (error.status === 404) {
          throw notFound()
        }
        throw error
      })

    return post
  })

export const postQueryOptions = (postId: string) =>
  queryOptions({
    queryKey: ['post', postId],
    queryFn: async () => fetchPost({data: postId}),
  })
