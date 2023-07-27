import { FC } from 'react'
import { IBranch } from '@/interfaces'
import { BranchItem } from './index'

const Branches: FC<{ branches: IBranch[] }> = ({ branches }) => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {branches.map((branch) => (
          <BranchItem key={branch._id} branch={branch} />
        ))}
      </div>
    </div>
  )
}

export default Branches
