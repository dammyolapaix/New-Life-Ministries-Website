import { IBranch } from '@/interfaces'
import { sanityClient } from '@/lib'

export const getBranches = async (): Promise<IBranch[]> => {
  const query = `*[_type == 'branch'] | order(_createdAt desc)`

  return await sanityClient.fetch(query)
}

export const getSingleBranch = async (slug: string): Promise<IBranch> => {
  const query = `*[_type == 'branch' && slug.current == "${slug}"][0]{
    _id,
    name,
    slug, 
    location,
    "activities": *[_type == 'activity' && references(^._id)]{
      _id,
      name,
      time,
      days,
      location
    }
}`

  return await sanityClient.fetch(query)
}
