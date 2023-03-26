import { IMinistry } from '@/interfaces'
import Image from 'next/image'
import React, { FC } from 'react'
import defaultMinistryPic from '../public/john-price-RAZQiZOX3mU-unsplash.jpg'

const MinistryDetails: FC<{ ministry: IMinistry }> = ({ ministry }) => {
  return (
    <section>
      <header className="bg-gradient-to-b md:bg-gradient-to-r from-primary to-tertiary">
        <div className="container h-80 flex justify-center items-center">
          <h1 className="text-white font-bold text-4xl">
            {ministry.attributes.name}
          </h1>
        </div>
      </header>

      <div className="py-20 bg-gray-200">
        <div className="container grid grid-cols-1 md:grid-cols-2">
          <Image
            src={
              ministry.attributes.image
                ? ministry.attributes.image.data.attributes.url
                : defaultMinistryPic
            }
            alt={`Image of ${ministry.attributes.name}`}
            width={500}
            height={600}
            className="shadow-2xl mx-auto mb-10 md:mb-0"
          />
          <div>
            <h2 className="font-bold text-2xl text-primary mb-5">
              {ministry.attributes.name}
            </h2>
            {ministry.attributes.description && (
              <p className="mb-3">{ministry.attributes.description}</p>
            )}
            {ministry.attributes.quote && (
              <q className="mb-3 text-secondary font-semibold">
                {ministry.attributes.quote}
              </q>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MinistryDetails
