import Image from 'next/image'
import React, { FC } from 'react'
import { TbMilitaryRank } from 'react-icons/tb'
import { BsTelephoneFill } from 'react-icons/bs'
import pastorPic from '../public/melyna-valle-3yiSaxd-V6Q-unsplash.jpg'
import { MdLocationOn, MdOutlineEmail } from 'react-icons/md'
import { IPastor } from '@/interfaces'

const PastorDetails: FC<{ pastor: IPastor }> = ({ pastor }) => {
  return (
    <section>
      <header className="bg-gradient-to-b md:bg-gradient-to-r from-primary to-tertiary">
        <div className="container h-80 flex justify-center items-center">
          <h1 className="text-white font-bold text-4xl">{pastor.name}</h1>
        </div>
      </header>

      <div className="py-20 bg-gray-200">
        <div className="container grid grid-cols-1 md:grid-cols-2">
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
            alt={`Image of ${pastor.name}`}
            width={500}
            height={600}
            className="shadow-2xl mx-auto mb-10 md:mb-0"
          />
          <div>
            <h2 className="font-bold text-2xl text-primary mb-5">
              {pastor.name}
            </h2>

            {pastor.about && <p className="mb-3">{pastor.about}</p>}
            {pastor.rank && (
              <div className="flex items-center mb-3">
                <TbMilitaryRank className="mr-1 text-primary" />
                <h5 className="ml-1">{pastor.rank}</h5>
              </div>
            )}
            {pastor.address && (
              <div className="flex items-center mb-3">
                <MdLocationOn className="mr-1 text-primary" />
                <h5 className="ml-1">{pastor.address}</h5>
              </div>
            )}
            {pastor.phoneNumber && (
              <div className="flex items-center mb-3">
                <BsTelephoneFill className="mr-2 text-tertiary" />
                <a
                  href="tel:+233548723096"
                  target={'_blank'}
                  rel="noreferrer"
                  className="ml-2 hover:text-tertiary"
                >
                  {pastor.phoneNumber}
                </a>
              </div>
            )}
            {pastor.email && (
              <div className="flex items-center mb-3">
                <MdOutlineEmail className="mr-2 text-tertiary" />
                <a
                  href={`mailto:${pastor.email}`}
                  target={'_blank'}
                  rel="noreferrer"
                  className="ml-2 hover:text-tertiary"
                >
                  {pastor.email}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PastorDetails
