import { IPastorsRes } from '@/interfaces'
import { makeRequest } from '@/lib'

export const getPastors = async (): Promise<IPastorsRes> => {
  const { data } = await makeRequest.get<IPastorsRes>('/pastors?populate=*')
  return data
}

export const getSinglePastor = async (slug: string): Promise<IPastorsRes> => {
  const { data } = await makeRequest.get<IPastorsRes>(
    `/pastors?filters[slug][$eq]=${slug}&populate=*`
  )
  return data
}
