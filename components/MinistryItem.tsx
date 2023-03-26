import { IMinistry } from '@/interfaces'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import defaultMinistryPic from '../public/john-price-RAZQiZOX3mU-unsplash.jpg'

const MinistryItem: FC<{ ministry: IMinistry }> = ({ ministry }) => {
  return (
    <Link href={`/ministries/${ministry.attributes.slug}`}>
      <Image
        src={
          ministry.attributes.image
            ? ministry.attributes.image.data.attributes.url
            : defaultMinistryPic
        }
        width={600}
        height={600}
        alt={`Image of ${ministry.attributes.name}`}
        className="shadow-2xl mb-3"
      />
      <h3 className="font-medium text-lg text-center hover:text-secondary hover:underline">
        {ministry.attributes.name}
      </h3>
    </Link>
  )
}

export default MinistryItem
