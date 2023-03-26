import { IMinistry } from '@/interfaces'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import pastorPic from '../public/melyna-valle-3yiSaxd-V6Q-unsplash.jpg'

const MinistryItem: FC<{ ministry: IMinistry }> = ({ ministry }) => {
  return (
    <Link href={`/ministries/${ministry.attributes.slug}`}>
      <Image
        src={
          ministry.attributes.image
            ? ministry.attributes.image.data.attributes.url
            : pastorPic
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
