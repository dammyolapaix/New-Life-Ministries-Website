import { IMessagesRes } from '@/interfaces'
import { makeRequest } from '@/lib'

export const getMessages = async (): Promise<IMessagesRes> => {
  const { data } = await makeRequest.get<IMessagesRes>('/messages?populate=*')
  return data
}

export const getSingleMessage = async (slug: string): Promise<IMessagesRes> => {
  const { data } = await makeRequest.get<IMessagesRes>(
    `/messages?filters[youtubeId][$eq]=${slug}&populate=*`
  )
  return data
}
