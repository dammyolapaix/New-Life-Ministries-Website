import { IMeta } from './index'

export interface IEventsRes {
  data: IEvent[]
  meta: IMeta
}

export interface IEvent {
  id: number
  attributes: IEventAttributes
}

export interface IEventAttributes {
  name: string
  slug: string
  description?: string
  date: string
  venue?: string
  time?: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
}
