import { IPastor } from '@/interfaces'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import pastorPic from '../public/melyna-valle-3yiSaxd-V6Q-unsplash.jpg'

const PastorItem: FC<{ pastor: IPastor }> = ({ pastor }) => {
  return (
    <Link href={`/pastors/${pastor.slug.current}`}>
      <div className="block relative top-0 left-0">
        <Image
          src={
            pastor.image
              ? `https://cdn.sanity.io/images/q9bzhdm3/production/${
                  pastor.image.asset._ref.split('-')[1]
                }-${pastor.image.asset._ref.split('-')[2]}.${
                  pastor.image.asset._ref.split('-')[3]
                }`
              : pastorPic
          }
          width={300}
          height={300}
          alt={`Image of ${pastor.name}`}
          className="shadow-2xl mb-3 mx-auto"
        />
      </div>
      <h3 className="font-medium text-lg text-center">{pastor.name}</h3>
      {pastor.rank && <h4 className="text-center">{pastor.rank}</h4>}
    </Link>
  )
}

export default PastorItem
