import { IBranchesRes } from '@/interfaces'
import { makeRequest } from '@/lib'

export const getBranches = async (): Promise<IBranchesRes> => {
  const { data } = await makeRequest.get<IBranchesRes>(
    '/branches?sort=createdAt'
  )
  return data
}

export const getSingleBranch = async (slug: string): Promise<IBranchesRes> => {
  const { data } = await makeRequest.get<IBranchesRes>(
    `/branches?filters[slug][$eq]=${slug}`
  )
  return data
}
