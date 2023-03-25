import { IEventsRes } from '@/interfaces'
import { makeRequest } from '@/lib'

export const getEvents = async (): Promise<IEventsRes> => {
  const { data } = await makeRequest.get<IEventsRes>('/events')
  return data
}
