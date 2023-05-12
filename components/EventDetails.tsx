import { IEvent } from '@/interfaces'
import { formatDateToddmYYY } from '@/utils'
import Image from 'next/image'
import { FC } from 'react'
import { BiTime } from 'react-icons/bi'
import { MdEvent, MdLocationOn } from 'react-icons/md'
import congregationPic from '../public/john-price-RAZQiZOX3mU-unsplash.jpg'
import Countdown from './CountDown'

const EventDetails: FC<{ event: IEvent }> = ({ event }) => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-3">
      <div className="md:col-span-2 bg-gradient-to-b md:bg-gradient-to-r from-primary to-tertiary">
        <Image
          src={
            event.attributes.image && event.attributes.image.data !== null
              ? event.attributes.image.data.attributes.url
              : congregationPic
          }
          width={300}
          height={300}
          alt="congregation"
          className="shadow-2xl w-full h-full"
        />
      </div>
      <div className="md:col-span-1 container flex flex-col justify-center">
        <div className="lg:mt-20 mb-10">
          <Countdown eventDate={new Date(event.attributes.date)} />
        </div>
        <div className="mb-3">
          <h1 className="text-center font-medium text-2xl text-primary mb-5">
            {event.attributes.name}
          </h1>
          <div className="flex items-center mb-1">
            <MdEvent className="mr-1 text-primary" />
            <h5 className="ml-1 font-thin">
              {formatDateToddmYYY(event.attributes.date)}
            </h5>
          </div>
          <div className="flex items-center mb-1">
            <BiTime className="mr-1 text-primary" />
            <h5 className="ml-1 font-thin">
              {event.attributes.time ? event.attributes.time : 'Not Given'}
            </h5>
          </div>
          <div className="flex items-center mb-1">
            <MdLocationOn className="mr-1 text-primary" />
            <h5 className="ml-1 font-thin">
              {event.attributes.venue ? event.attributes.venue : 'Not Given'}
            </h5>
          </div>
        </div>
        {event.attributes.description && (
          <p className="font-thin">{event.attributes.description}</p>
        )}
      </div>
    </div>
  )
}

export default EventDetails
