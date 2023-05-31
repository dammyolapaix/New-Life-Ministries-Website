import { IActivity } from '@/interfaces'
import React, { FC } from 'react'
import { BiTime } from 'react-icons/bi'
import { CiLocationOn } from 'react-icons/ci'
import { MdOutlineToday } from 'react-icons/md'

const ActivityItem: FC<{ activity: IActivity }> = ({ activity }) => {
  return (
    <div className="bg-white shadow-xl hover:shadow-2xl p-3 rounded-md">
      <h3 className="font-semibold text-lg text-center text-primary mb-3">
        {activity.attributes.name}
      </h3>
      <div className="flex items-center">
        <BiTime className="mr-1 text-secondary" />
        <h5 className="ml-1 font-light">{activity.attributes.time}</h5>
      </div>
      <div className="flex items-center">
        <MdOutlineToday className="mr-1 text-secondary" />
        <h5 className="ml-1 font-light">{activity.attributes.days}</h5>
      </div>
      <div className="flex items-center">
        <CiLocationOn className="mr-1 text-secondary" />
        <h5 className="ml-1 font-light">{activity.attributes.location}</h5>
      </div>
    </div>
  )
}

export default ActivityItem
