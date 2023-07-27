import { IMinistry } from '@/interfaces'
import { sanityClient } from '@/lib'

export const getMinistries = async (): Promise<IMinistry[]> => {
  const query = `*[_type == 'ministry'] | order(_createdAt desc)`

  return await sanityClient.fetch(query)
}

export const getSingleMinistry = async (slug: string): Promise<IMinistry> => {
  const query = `*[_type == 'ministry' && slug.current == "${slug}"][0]`

  return await sanityClient.fetch(query)
}
