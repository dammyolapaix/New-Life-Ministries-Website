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
import { BiTime } from 'react-icons/bi'
import congregationPic from '../public/john-price-RAZQiZOX3mU-unsplash.jpg'
import pastorPic from '../public/melyna-valle-3yiSaxd-V6Q-unsplash.jpg'
import Layout from '@/components/Layout'
import ContactUs from '@/components/ContactUs'

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
                  className="px-10 py-5 bg-old-secondary text-gray-900 font-bold hover:bg-gradient-to-r from-other to-light rounded-md shadow-2xl"
                >
                  Church With Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Us */}
        <section className="py-10 bg-light">
          <div className="container">
            <div className="mb-10">
              <h2 className="font-semibold text-3xl text-center mb-10">
                About Us
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
                <Image src={pastorPic} alt="pastorPic" className="shadow-2xl" />
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
                    className="px-5 py-3 bg-tertiary rounded-md text-white hover:bg-gradient-to-r from-primary to-secondary"
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
        {/* <section className="py-10 bg-light">
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
            <h2 className="font-semibold mb-10 text-old-secondary text-3xl text-center">
              Follow Us On Social Media
            </h2>
          </div>
          <div className="flex items-center justify-center">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 hover:text-old-secondary"
            >
              <FaFacebookSquare />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 hover:text-old-secondary"
            >
              <FaYoutube />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 hover:text-old-secondary"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 hover:text-old-secondary"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 hover:text-old-secondary"
            >
              <FaTiktok />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 hover:text-old-secondary"
            >
              <FaLinkedin />
            </a>
          </div>
        </section>

        {/* Get In Touch */}
        <section className="py-10">
          <ContactUs />
        </section>
      </main>
    </Layout>
  )
}
