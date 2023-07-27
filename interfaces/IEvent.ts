export default interface IEvent {
  id: number
  name: string
  slug: {
    current: string
  }
  image?: {
    asset: {
      _ref: string
    }
  }
  description?: string
  date: string
  venue?: string
  time?: string
}
