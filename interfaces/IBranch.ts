export interface IBranch {
  _id: string
  name: string
  slug: {
    current: string
  }
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
