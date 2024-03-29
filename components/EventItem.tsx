import { IEvent } from '@/interfaces'
import { formatDateToddmYYY } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { BiTime } from 'react-icons/bi'
import { MdEvent, MdLocationOn } from 'react-icons/md'
import congregationPic from '../public/john-price-RAZQiZOX3mU-unsplash.jpg'

const EventItem: FC<{ event: IEvent }> = ({ event }) => {
  return (
    <>
      <Link href={`/events/${event.slug.current}`}>
        <div className="bg-white flex shadow-xl hover:shadow-2xl p-3 rounded-2xl">
          <div className="w-2/5 mr-2">
            <Image
              src={
                event.image
                  ? `https://cdn.sanity.io/images/q9bzhdm3/production/${
                      event.image.asset._ref.split('-')[1]
                    }-${event.image.asset._ref.split('-')[2]}.${
                      event.image.asset._ref.split('-')[3]
                    }`
                  : congregationPic
              }
              width={300}
              height={300}
              alt="congregation"
              className="w-full h-full rounded-2xl"
            />
          </div>
          <div className="w-3/5 ml-2">
            <h3 className="font-semibold text-lg mb-3 text-primary">
              {event.name}
            </h3>
            <div className="flex items-center mb-1">
              <MdEvent className="mr-1 text-primary" />
              <h5 className="ml-1 font-thin">
                {formatDateToddmYYY(event.date)}
              </h5>
            </div>
            <div className="flex items-center mb-1">
              <BiTime className="mr-1 text-primary" />
              <h5 className="ml-1 font-thin">
                {event.time ? event.time : 'Not Given'}
              </h5>
            </div>
            <div className="flex items-center mb-1">
              <MdLocationOn className="mr-1 text-primary" />
              <h5 className="ml-1 font-thin">
                {event.venue ? event.venue : 'Not Given'}
              </h5>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default EventItem
