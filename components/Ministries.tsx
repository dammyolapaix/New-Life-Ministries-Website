import { IMinistry } from '@/interfaces'
import React, { FC } from 'react'
import MinistryItem from './MinistryItem'

const Ministries: FC<{ ministries: IMinistry[] }> = ({ ministries }) => {
  return (
    <div className="container">
      <h2 className="font-semibold text-4xl text-primary mb-10">
        Our Ministries
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {ministries.map((ministry) => (
          <div key={ministry.id}>
            <MinistryItem ministry={ministry} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Ministries
