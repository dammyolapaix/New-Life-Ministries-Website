import { IBranch } from '@/interfaces'
import React, { FC } from 'react'
import { ActivityItem } from './index'

const BranchDetails: FC<{ branch: IBranch }> = ({ branch }) => {
  return (
    <section>
      <header className="bg-gradient-to-b md:bg-gradient-to-r from-primary to-tertiary">
        <div className="container h-80 flex justify-center items-center">
          <h1 className="text-white font-bold text-4xl">{branch.name}</h1>
        </div>
      </header>
      {/* <section className="">
        <h2 className="font-semibold text-3xl text-center my-10 text-tertiary">
          Our Weekly Activities
        </h2>

        <div className="container grid grid-cols-1 md:grid-cols-4 gap-10">
          {branch.attributes.activities &&
          branch.attributes.activities.data.length > 0 ? (
            branch.attributes.activities.data.map((activity) => (
              <ActivityItem key={activity.id} activity={activity} />
            ))
          ) : (
            <div className="text-center font-bold text-2xl text-red-600">
              No Activity Found
            </div>
          )}
        </div>
      </section> */}
    </section>
  )
}

export default BranchDetails
