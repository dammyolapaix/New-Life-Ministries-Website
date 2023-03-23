import Layout from '@/components/Layout'
import Image from 'next/image'
import congregationPic from '../../public/john-price-RAZQiZOX3mU-unsplash.jpg'
import { MdEvent, MdLocationOn } from 'react-icons/md'
import { BiTime } from 'react-icons/bi'
import Link from 'next/link'

const EventsPage = () => {
  return (
    <Layout>
      <header className="bg-gradient-to-b md:bg-gradient-to-r from-primary to-tertiary">
        <div className="container h-80 flex justify-center items-center">
          <h1 className="text-white font-bold text-4xl">All Events</h1>
        </div>
      </header>

      <section className="py-20 bg-gray-200">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10">
          <Link href={'/events/details'}>
            <div className="bg-white flex shadow-xl hover:shadow-2xl p-3 rounded-2xl">
              <div className="w-2/5 mr-2">
                <Image
                  src={congregationPic}
                  alt="congregation"
                  className="w-full h-full rounded-2xl"
                />
              </div>
              <div className="w-3/5 ml-2">
                <h3 className="font-semibold text-lg mb-3 text-primary">
                  Possessing The Gate
                </h3>
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
                  <h5 className="ml-1 font-thin">
                    Tt Vasumweg 4b,1033 SC Amsterdam
                  </h5>
                </div>
              </div>
            </div>
          </Link>
          <Link href={'/events/details'}>
            <div className="bg-white flex shadow-xl hover:shadow-2xl p-3 rounded-2xl">
              <div className="w-2/5 mr-2">
                <Image
                  src={congregationPic}
                  alt="congregation"
                  className="w-full h-full rounded-2xl"
                />
              </div>
              <div className="w-3/5 ml-2">
                <h3 className="font-semibold text-lg mb-3 text-primary">
                  Possessing The Gate
                </h3>
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
                  <h5 className="ml-1 font-thin">
                    Tt Vasumweg 4b,1033 SC Amsterdam
                  </h5>
                </div>
              </div>
            </div>
          </Link>
          <Link href={'/events/details'}>
            <div className="bg-white flex shadow-xl hover:shadow-2xl p-3 rounded-2xl">
              <div className="w-2/5 mr-2">
                <Image
                  src={congregationPic}
                  alt="congregation"
                  className="w-full h-full rounded-2xl"
                />
              </div>
              <div className="w-3/5 ml-2">
                <h3 className="font-semibold text-lg mb-3 text-primary">
                  Possessing The Gate
                </h3>
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
                  <h5 className="ml-1 font-thin">
                    Tt Vasumweg 4b,1033 SC Amsterdam
                  </h5>
                </div>
              </div>
            </div>
          </Link>
          <Link href={'/events/details'}>
            <div className="bg-white flex shadow-xl hover:shadow-2xl p-3 rounded-2xl">
              <div className="w-2/5 mr-2">
                <Image
                  src={congregationPic}
                  alt="congregation"
                  className="w-full h-full rounded-2xl"
                />
              </div>
              <div className="w-3/5 ml-2">
                <h3 className="font-semibold text-lg mb-3 text-primary">
                  Possessing The Gate
                </h3>
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
                  <h5 className="ml-1 font-thin">
                    Tt Vasumweg 4b,1033 SC Amsterdam
                  </h5>
                </div>
              </div>
            </div>
          </Link>
          <Link href={'/events/details'}>
            <div className="bg-white flex shadow-xl hover:shadow-2xl p-3 rounded-2xl">
              <div className="w-2/5 mr-2">
                <Image
                  src={congregationPic}
                  alt="congregation"
                  className="w-full h-full rounded-2xl"
                />
              </div>
              <div className="w-3/5 ml-2">
                <h3 className="font-semibold text-lg mb-3 text-primary">
                  Possessing The Gate
                </h3>
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
                  <h5 className="ml-1 font-thin">
                    Tt Vasumweg 4b,1033 SC Amsterdam
                  </h5>
                </div>
              </div>
            </div>
          </Link>
          <Link href={'/events/details'}>
            <div className="bg-white flex shadow-xl hover:shadow-2xl p-3 rounded-2xl">
              <div className="w-2/5 mr-2">
                <Image
                  src={congregationPic}
                  alt="congregation"
                  className="w-full h-full rounded-2xl"
                />
              </div>
              <div className="w-3/5 ml-2">
                <h3 className="font-semibold text-lg mb-3 text-primary">
                  Possessing The Gate
                </h3>
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
                  <h5 className="ml-1 font-thin">
                    Tt Vasumweg 4b,1033 SC Amsterdam
                  </h5>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default EventsPage
