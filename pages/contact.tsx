import Image from 'next/image'
import congregationPic from '../public/john-price-RAZQiZOX3mU-unsplash.jpg'
import { GrLocation } from 'react-icons/gr'
import { BsTelephoneFill } from 'react-icons/bs'
import Layout from '@/components/Layout'

const ContactPage = () => {
  return (
    <Layout>
      <header className="bg-gradient-to-r from-primary to-tertiary">
        <div className="container h-80 flex justify-center items-center">
          <h1 className="text-white font-bold text-4xl">Contact Us</h1>
        </div>
      </header>

      <section className="py-10 md:py-20">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="">
            <h2 className="font-bold text-4xl text-tertiary mb-3">
              Talk to us
            </h2>
            <p className="mb-5">
              Have questions about services, events and church? Fill out the
              form and we will be in touch directly.
            </p>

            <h3 className="font-bold text-2xl text-tertiary mb-3">
              Our Location
            </h3>
            <Image
              src={congregationPic}
              alt="congregation"
              className="w-full rounded-md mb-3"
            />
            <div className="flex items-center mb-3">
              <GrLocation className="mr-2" />
              <h5 className="ml-2">Accra, Ghana</h5>
            </div>
            <div className="flex items-center">
              <BsTelephoneFill className="mr-2" />
              <h5 className="ml-2">+233548723096</h5>
            </div>
          </div>
          <div className="shadow-xl p-5">
            <form>
              <div className="mb-3">
                <label htmlFor={'name'} className="block">
                  <span className="block text-sm font-semibold text-slate-700">
                    Your Name *
                  </span>
                </label>

                <input
                  type={'text'}
                  id={'name'}
                  name={'name'}
                  onChange={() => 'hello'}
                  placeholder={'Name'}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-primary"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor={'email'} className="block">
                  <span className="block text-sm font-semibold text-slate-700">
                    Your Email *
                  </span>
                </label>

                <input
                  type={'email'}
                  id={'email'}
                  name={'email'}
                  onChange={() => 'hello'}
                  placeholder={'Email'}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-primary"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor={'message'} className="block">
                  <span className="block text-sm font-semibold text-slate-700">
                    Your message *
                  </span>
                </label>

                <textarea
                  name="message"
                  id=""
                  cols={30}
                  rows={10}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-primary"
                ></textarea>
              </div>
              <div className="mb-3">
                <input
                  type="submit"
                  value={'Send your message'}
                  className="bg-gradient-to-r from-primary to-tertiary text-white text-xl p-3 rounded-md w-full text-center cursor-pointer hover:bg-tertiary"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage
