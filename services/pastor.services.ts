import { IPastor } from '@/interfaces'
import { sanityClient } from '@/lib'

export const getPastors = async (): Promise<IPastor[]> => {
  const query = `*[_type == 'pastor'] | order(_createdAt desc)`

  return await sanityClient.fetch(query)
}

export const getSinglePastor = async (slug: string): Promise<IPastor> => {
  const query = `*[_type == 'pastor' && slug.current == "${slug}"][0]`

  return await sanityClient.fetch(query)
}
