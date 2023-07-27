export default interface IMinistry {
  _id: string
  name: string
  slug: {
    current: string
  }
  description?: string
  quote?: string
  image?: {
    asset: {
      _ref: string
    }
  }
}
