export default interface IFinance {
  _id: string
  name: string
  report?: {
    asset: {
      _ref: string
    }
  }
}
