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
  activities: { data: IActivity[] }
}

export interface IActivity {
  id: number
  attributes: IActivityAttributes
}

export interface IActivityAttributes {
  name: string
  time: string
  days: string
  location: string
  branch: IBranch
}
