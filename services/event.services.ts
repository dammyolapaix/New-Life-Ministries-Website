import { IEventsRes } from '@/interfaces'
import { makeRequest } from '@/lib'

export const getEvents = async (): Promise<IEventsRes> => {
  const { data } = await makeRequest.get<IEventsRes>('/events')
  return data
}

export const getSingleEvent = async (slug: string): Promise<IEventsRes> => {
  const { data } = await makeRequest.get<IEventsRes>(
    `/events/?filters[slug][$eq]=${slug}`
  )
  return data
}
