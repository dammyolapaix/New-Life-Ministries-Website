import { IMeta } from './index'

export interface IMessagesRes {
  data: IMessage[]
  meta: IMeta
}

export interface IMessage {
  id: number
  attributes: IMessageAttributes
}

export interface IMessageAttributes {
  title: string
  youtubeId: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
}
