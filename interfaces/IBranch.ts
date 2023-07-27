export interface IBranch {
  _id: string
  name: string
  slug: {
    current: string
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
