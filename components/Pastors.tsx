import { IPastor } from '@/interfaces'
import { FC } from 'react'
import { PastorItem } from '@/components'

const Pastors: FC<{ pastors: IPastor[] }> = ({ pastors }) => {
  return (
    <div className="container">
      <h2 className="font-semibold text-4xl text-primary mb-3">
        Meet our pastors
      </h2>
      <p className="text-xl mb-5">
        These are the servants of Christ who have dedicated their lives to the
        Gospel of our Lord Jesus Christ.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {pastors.map((pastor) => (
          <div key={pastor._id}>
            <PastorItem pastor={pastor} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pastors
