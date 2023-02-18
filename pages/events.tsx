import Layout from '@/components/Layout'
import Image from 'next/image'
import congregationPic from '../public/john-price-RAZQiZOX3mU-unsplash.jpg'

const EventsPage = () => {
  return (
    <Layout>
      <header className="bg-gradient-to-b md:bg-gradient-to-r from-primary to-tertiary">
        <div className="container h-80 flex justify-center items-center">
          <h1 className="text-white font-bold text-4xl">All Events</h1>
        </div>
      </header>

      <section className="py-20">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex shadow-xl hover:shadow-2xl p-3 rounded-md">
            <div className="w-2/5 mr-2">
              <Image
                src={congregationPic}
                alt="congregation"
                className="w-full h-full"
              />
            </div>
            <div className="w-3/5 ml-2">
              <h3 className="mb-3 font-light">Prayer Crusade</h3>
              <h3 className="font-semibold text-lg mb-3">
                Possessing The Gate
              </h3>
              <h5 className="font-thin">7th - 9th April</h5>
            </div>
          </div>
          <div className="flex shadow-xl hover:shadow-2xl p-3 rounded-md">
            <div className="w-2/5 mr-2">
              <Image
                src={congregationPic}
                alt="congregation"
                className="w-full h-full"
              />
            </div>
            <div className="w-3/5 ml-2">
              <h3 className="mb-3 font-light">Prayer Crusade</h3>
              <h3 className="font-semibold text-lg mb-3">
                Possessing The Gate
              </h3>
              <h5 className="font-thin">7th - 9th April</h5>
            </div>
          </div>
          <div className="flex shadow-xl hover:shadow-2xl p-3 rounded-md">
            <div className="w-2/5 mr-2">
              <Image
                src={congregationPic}
                alt="congregation"
                className="w-full h-full"
              />
            </div>
            <div className="w-3/5 ml-2">
              <h3 className="mb-3 font-light">Prayer Crusade</h3>
              <h3 className="font-semibold text-lg mb-3">
                Possessing The Gate
              </h3>
              <h5 className="font-thin">7th - 9th April</h5>
            </div>
          </div>
          <div className="flex shadow-xl hover:shadow-2xl p-3 rounded-md">
            <div className="w-2/5 mr-2">
              <Image
                src={congregationPic}
                alt="congregation"
                className="w-full h-full"
              />
            </div>
            <div className="w-3/5 ml-2">
              <h3 className="mb-3 font-light">Prayer Crusade</h3>
              <h3 className="font-semibold text-lg mb-3">
                Possessing The Gate
              </h3>
              <h5 className="font-thin">7th - 9th April</h5>
            </div>
          </div>
          <div className="flex shadow-xl hover:shadow-2xl p-3 rounded-md">
            <div className="w-2/5 mr-2">
              <Image
                src={congregationPic}
                alt="congregation"
                className="w-full h-full"
              />
            </div>
            <div className="w-3/5 ml-2">
              <h3 className="mb-3 font-light">Prayer Crusade</h3>
              <h3 className="font-semibold text-lg mb-3">
                Possessing The Gate
              </h3>
              <h5 className="font-thin">7th - 9th April</h5>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default EventsPage
