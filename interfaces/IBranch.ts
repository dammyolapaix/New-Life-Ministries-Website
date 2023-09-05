export interface IBranch {
  _id: string
  name: string
  location: string
  slug: {
    current: string
  }
  image?: {
    asset: {
      _ref: string
    }
  }
  activities: IActivity[]
}

export interface IActivity {
  _id: number
  name: string
  time: string
  days: string
  location: string
  branch: IBranch
}
