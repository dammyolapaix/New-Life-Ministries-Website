import { IMinistry } from '@/interfaces'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import defaultMinistryPic from '../public/john-price-RAZQiZOX3mU-unsplash.jpg'

const MinistryItem: FC<{ ministry: IMinistry }> = ({ ministry }) => {
  return (
    <Link href={`/ministries/${ministry.slug.current}`}>
      <Image
        src={
          ministry.image
            ? `https://cdn.sanity.io/images/q9bzhdm3/production/${
                ministry.image.asset._ref.split('-')[1]
              }-${ministry.image.asset._ref.split('-')[2]}.${
                ministry.image.asset._ref.split('-')[3]
              }`
            : defaultMinistryPic
        }
        width={600}
        height={600}
        alt={`Image of ${ministry.name}`}
        className="shadow-2xl mb-3"
      />
      <h3 className="font-medium text-lg text-center hover:text-secondary hover:underline">
        {ministry.name}
      </h3>
    </Link>
  )
}

export default MinistryItem
