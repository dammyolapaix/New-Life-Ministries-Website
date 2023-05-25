import { IMeta } from './index'

export interface IBranchesRes {
  data: IBranch[]
  meta: IMeta
}

export interface IBranch {
  id: number
  attributes: IBranchAttributes
}

export interface IBranchAttributes {
  name: string
  slug: string
}
