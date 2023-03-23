import Image from 'next/image'
import { BiTime } from 'react-icons/bi'
import { MdEvent, MdLocationOn } from 'react-icons/md'
import congregationPic from '../public/john-price-RAZQiZOX3mU-unsplash.jpg'
import Countdown from './CountDown'

const EventDetails = () => {
  const eventDate = new Date('2023-08-01T00:00:00')

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-3">
      <div className="md:col-span-2 bg-gradient-to-b md:bg-gradient-to-r from-primary to-tertiary">
        <Image
          src={congregationPic}
          alt="congregation"
          className="shadow-2xl w-full h-full"
        />
      </div>
      <div className="md:col-span-1 container flex flex-col justify-center">
        <div className="lg:mt-20 mb-10">
          <Countdown eventDate={eventDate} />
        </div>
        <div className="mb-3">
          <h1 className="text-center font-medium text-2xl text-primary mb-5">
            Possessing The Gate
          </h1>
          <div className="flex items-center mb-1">
            <MdEvent className="mr-1 text-primary" />
            <h5 className="ml-1 font-thin">7th - 9th April</h5>
          </div>
          <div className="flex items-center mb-1">
            <BiTime className="mr-1 text-primary" />
            <h5 className="ml-1 font-thin">11:30 - 14:30</h5>
          </div>
          <div className="flex items-center mb-1">
            <MdLocationOn className="mr-1 text-primary" />
            <h5 className="ml-1 font-thin">Tt Vasumweg 4b,1033 SC Amsterdam</h5>
          </div>
        </div>
        <p className="font-thin ">
          This day is a special day set aside to praise and magnify the Lord for
          His goodness and kindness towards us, and for ushering us into a new
          year.
        </p>
      </div>
    </div>
  )
}

export default EventDetails
