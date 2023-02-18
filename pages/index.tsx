import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {
  FaFacebookSquare,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaLinkedin,
} from 'react-icons/fa'
import { GrLocation } from 'react-icons/gr'
import { BsTelephoneFill } from 'react-icons/bs'
import { BiTime } from 'react-icons/bi'
import congregationPic from '../public/john-price-RAZQiZOX3mU-unsplash.jpg'
import pastorPic from '../public/melyna-valle-3yiSaxd-V6Q-unsplash.jpg'
import Layout from '@/components/Layout'

export default function Home() {
  return (
    <Layout>
      <main>
        {/* Above the fold section */}
        <section className="h-screen">
          <Image
            src={congregationPic}
            alt="congregation"
            className="w-full relative h-full"
          />
          <div className="absolute top-0 overflow-hidden bg-gradient-to-b md:bg-gradient-to-r from-primary/70 to-tertiary/70 h-full w-full">
            <div className="flex justify-center items-center h-full">
              <div className="container text-white text-center">
                <h1 className="font-bold text-4xl md:text-6xl mb-5">
                  Welcome To New Life Ministries Amsterdam Website
                </h1>
                <p className="text-2xl mb-10 font-light">
                  Join us today as we worship the Lord
                </p>
                <Link
                  href={'#'}
                  className="px-10 py-5 bg-secondary text-gray-900 rounded-md shadow-2xl"
                >
                  Church With Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Us */}
        <section className="py-10 bg-slate-300">
          <div className="container">
            <div className="mb-10">
              <h2 className="font-semibold text-3xl text-center mb-10">
                About Us
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
                <Image src={pastorPic} alt="pastorPic" />
                <div>
                  <p className="mb-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Cum iste numquam explicabo maxime debitis non nulla error,
                    eligendi consequuntur unde veritatis laboriosam molestias
                    quod officia voluptatem officiis distinctio eaque
                    voluptatibus.
                  </p>
                  <p className="mb-10">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Cum iste numquam explicabo maxime debitis non nulla error,
                    eligendi consequuntur unde veritatis laboriosam molestias
                    quod officia voluptatem officiis distinctio eaque
                    voluptatibus.
                  </p>
                  <Link
                    href={'#'}
                    className="px-5 py-3 bg-tertiary rounded-md text-white"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="mb-14">
              <h2 className="font-semibold text-3xl text-center mb-3">
                Our Mission
              </h2>
              <div className="text-center">
                <p className="mb-3">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                  iste numquam explicabo maxime debitis non nulla error,
                  eligendi consequuntur unde veritatis laboriosam molestias quod
                  officia voluptatem officiis distinctio eaque voluptatibus.
                </p>
                <p className="mb-10">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                  iste numquam explicabo maxime debitis non nulla error,
                  eligendi consequuntur unde veritatis laboriosam molestias quod
                  officia voluptatem officiis distinctio eaque voluptatibus.
                </p>
              </div>
            </div>
            <div className="mb-14">
              <h2 className="font-semibold text-3xl text-center mb-3">
                Our Vission
              </h2>
              <div className="text-center">
                <p className="mb-3">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                  iste numquam explicabo maxime debitis non nulla error,
                  eligendi consequuntur unde veritatis laboriosam molestias quod
                  officia voluptatem officiis distinctio eaque voluptatibus.
                </p>
                <p className="mb-10">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                  iste numquam explicabo maxime debitis non nulla error,
                  eligendi consequuntur unde veritatis laboriosam molestias quod
                  officia voluptatem officiis distinctio eaque voluptatibus.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Weekly Services */}
        <section className="py-20">
          <h2 className="font-semibold text-3xl text-center mb-10 text-tertiary">
            Our Weekly Services
          </h2>
          <div className="container grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="shadow-xl hover:shadow-2xl p-3 rounded-md">
              <h3 className="font-semibold text-lg text-center text-primary mb-3">
                Sunday Service
              </h3>
              <div className="flex justify-center items-center mb-2">
                <BiTime className="mr-1" />
                <h5 className="ml-1 font-light">7:30AM - 9:00AM</h5>
              </div>
              <div className="flex justify-center items-center">
                <BiTime className="mr-1" />
                <h5 className="ml-1 font-light">9:30AM - 12:00PM</h5>
              </div>
            </div>
            <div className="shadow-xl hover:shadow-2xl p-3 rounded-md">
              <h3 className="font-semibold text-lg text-center text-primary mb-3">
                Monday Service
              </h3>
              <div className="flex justify-center items-center mb-2">
                <BiTime className="mr-1" />
                <h5 className="ml-1 font-light">7:30AM - 9:00AM</h5>
              </div>
              <div className="flex justify-center items-center">
                <BiTime className="mr-1" />
                <h5 className="ml-1 font-light">9:30AM - 12:00PM</h5>
              </div>
            </div>
            <div className="shadow-xl hover:shadow-2xl p-3 rounded-md">
              <h3 className="font-semibold text-lg text-center text-primary mb-3">
                Tuesday Service
              </h3>
              <div className="flex justify-center items-center mb-2">
                <BiTime className="mr-1" />
                <h5 className="ml-1 font-light">7:30AM - 9:00AM</h5>
              </div>
              <div className="flex justify-center items-center">
                <BiTime className="mr-1" />
                <h5 className="ml-1 font-light">9:30AM - 12:00PM</h5>
              </div>
            </div>
            <div className="shadow-xl hover:shadow-2xl p-3 rounded-md">
              <h3 className="font-semibold text-lg text-center text-primary mb-3">
                Mid-Week Service
              </h3>
              <div className="flex justify-center items-center mb-2">
                <BiTime className="mr-1" />
                <h5 className="ml-1 font-light">7:30AM - 9:00AM</h5>
              </div>
              <div className="flex justify-center items-center">
                <BiTime className="mr-1" />
                <h5 className="ml-1 font-light">9:30AM - 12:00PM</h5>
              </div>
            </div>
          </div>
        </section>

        {/*  Watch Us Online */}
        {/* <section className="py-10 bg-slate-300">
          <div className="container">
            <h2 className="font-semibold text-3xl text-center mb-10">
              Watch Us Online
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <iframe
                className="w-full"
                height="315"
                src="https://www.youtube.com/embed/DRCoraISqmE"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/DRCoraISqmE"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/DRCoraISqmE"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/DRCoraISqmE"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section> */}

        {/* Follow Us On Social Media */}
        <section className="py-20 font-semibold text-3xl text-center bg-gradient-to-b md:bg-gradient-to-r from-primary/90 to-tertiary/90 text-white">
          <div className="container">
            <h2 className="font-semibold mb-10 text-secondary text-3xl text-center">
              Follow Us On Social Media
            </h2>
          </div>
          <div className="flex items-center justify-center">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 hover:text-secondary"
            >
              <FaFacebookSquare />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 hover:text-secondary"
            >
              <FaYoutube />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 hover:text-secondary"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 hover:text-secondary"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 hover:text-secondary"
            >
              <FaTiktok />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 hover:text-secondary"
            >
              <FaLinkedin />
            </a>
          </div>
        </section>

        {/* Get In Touch */}
        <section className="py-10">
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
            <div className="shadow-xl rounded-md p-5">
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
                <div className="mt-10 mb-3">
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
      </main>
    </Layout>
  )
}
