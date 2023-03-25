import { IPastor } from '@/interfaces'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import pastorPic from '../public/melyna-valle-3yiSaxd-V6Q-unsplash.jpg'

const PastorItem: FC<{ pastor: IPastor }> = ({ pastor }) => {
  return (
    <Link href={`/pastors/${pastor.attributes.slug}`}>
      <div className="block relative top-0 left-0">
        <Image
          src={
            pastor.attributes.image
              ? pastor.attributes.image.data.attributes.url
              : pastorPic
          }
          width={300}
          height={300}
          alt={`Image of ${pastor.attributes.name}`}
          className="shadow-2xl mb-3 mx-auto"
        />
      </div>
      <h3 className="font-medium text-lg text-center">
        {pastor.attributes.name}
      </h3>
      {pastor.attributes.rank && (
        <h4 className="text-center">{pastor.attributes.rank}</h4>
      )}
    </Link>
  )
}

export default PastorItem
