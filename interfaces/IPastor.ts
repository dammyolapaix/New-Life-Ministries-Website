export default interface IPastor {
  _id: string
  name: string
  slug: {
    current: string
  }
  rank?: string
  image?: {
    asset: {
      _ref: string
    }
  }
  about?: string
  address?: string
  phoneNumber?: string
  email?: string
}
