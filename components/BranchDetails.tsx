import { IBranch } from '@/interfaces'
import React, { FC } from 'react'
import { ActivityItem } from './index'

const BranchDetails: FC<{ branch: IBranch }> = ({ branch }) => {
  return (
    <section>
      <header className="bg-gradient-to-b md:bg-gradient-to-r from-primary to-tertiary">
        <div className="container h-80 flex justify-center items-center text-center">
          <div>
            <h1 className="text-white font-bold text-4xl mb-3">
              {branch.name}
            </h1>
            <h2 className="text-white font-medium text-xl">
              {branch.location}
            </h2>
          </div>
        </div>
      </header>
      <section className="">
        <h2 className="font-semibold text-3xl text-center my-10 text-tertiary">
          Our Weekly Activities
        </h2>

        <div className="container">
          {branch.activities && branch.activities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              {branch.activities.map((activity) => (
                <ActivityItem key={activity._id} activity={activity} />
              ))}
            </div>
          ) : (
            <div className="text-center font-bold text-2xl text-red-600">
              No Activity Found
            </div>
          )}
        </div>
      </section>
    </section>
  )
}

export default BranchDetails
