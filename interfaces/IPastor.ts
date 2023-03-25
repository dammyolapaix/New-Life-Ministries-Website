import { IImage, IMeta } from './index'

export interface IPastorsRes {
  data: IPastor[]
  meta: IMeta
}

export interface IPastor {
  id: number
  attributes: IPastorAttributes
}

export interface IPastorAttributes {
  name: string
  slug: string
  rank: string
  address: string
  email: string
  about: string
  phoneNumber: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  image?: IImage
}
