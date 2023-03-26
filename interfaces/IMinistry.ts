import { IImage, IMeta } from './index'

export interface IMinistriesRes {
  data: IMinistry[]
  meta: IMeta
}

export interface IMinistry {
  id: number
  attributes: IMinistryAttributes
}

export interface IMinistryAttributes {
  name: string
  slug: string
  description: string
  quote: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  image: IImage
}
