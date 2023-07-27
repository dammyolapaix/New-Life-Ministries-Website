import { IBranch } from '@/interfaces'
import Image from 'next/image'
import React, { FC } from 'react'
import churchPicture from '../public/daniel-tseng-QCjC1KpA4nA-unsplash.jpg'
import Link from 'next/link'

const BranchItem: FC<{ branch: IBranch }> = ({ branch }) => {
  return (
    <Link href={`/branches/${branch.slug.current}`}>
      <Image
        src={churchPicture}
        alt={`Image of ${branch.name}`}
        className="shadow-2xl mb-3 mx-auto"
      />
      <h3 className="font-medium text-2xl text-center hover:text-primary">
        {branch.name}
      </h3>
    </Link>
  )
}

export default BranchItem
