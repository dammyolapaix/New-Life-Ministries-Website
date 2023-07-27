import { IBranch } from '@/interfaces'
import { sanityClient } from '@/lib'

export const getBranches = async (): Promise<IBranch[]> => {
  const query = `*[_type == 'branch'] | order(_createdAt desc)`

  return await sanityClient.fetch(query)
}

export const getSingleBranch = async (slug: string): Promise<IBranch> => {
  const query = `*[_type == 'branch' && slug.current == "${slug}"][0]`

  return await sanityClient.fetch(query)
}
