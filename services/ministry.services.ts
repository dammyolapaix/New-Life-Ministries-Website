import { IMinistriesRes } from '@/interfaces'
import { makeRequest } from '@/lib'

export const getMinistries = async (): Promise<IMinistriesRes> => {
  const { data } = await makeRequest.get<IMinistriesRes>(
    '/ministries?populate=*'
  )
  return data
}

export const getSingleMinistry = async (
  slug: string
): Promise<IMinistriesRes> => {
  const { data } = await makeRequest.get<IMinistriesRes>(
    `/ministries?filters[slug][$eq]=${slug}&populate=*`
  )
  return data
}
