import { IEvent } from '@/interfaces'
import { sanityClient } from '@/lib'

export const getEvents = async (): Promise<IEvent[]> => {
  const query = `*[_type == 'event'] | order(date asc)`

  return await sanityClient.fetch(query)
}

export const getSingleEvent = async (slug: string): Promise<IEvent> => {
  const query = `*[_type == 'event' && slug.current == "${slug}"][0]`

  return await sanityClient.fetch(query)
}
