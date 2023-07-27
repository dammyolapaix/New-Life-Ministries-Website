import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import newLifeMinistriesLogo from '../public/newlifeministries-logo.png'

export default function Navbar() {
  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : ''

  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <>
      <nav className="bg-light text-tertiary shadow-2xl fixed top-0 z-50 w-full p-3">
        <div className="container flex items-center flex-wrap">
          <Link href={`${origin}`}>
            {/* New Life Ministries Amsterdam */}
            <Image
              src={newLifeMinistriesLogo}
              alt="newLifeMinistriesLogo"
              height={115}
              width={115}
            />
          </Link>
          <button
            className="inline-flex p-3 hover:bg-secondary rounded lg:hidden text-primary ml-auto hover:text-white outline-none"
            onClick={handleClick}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
          <div
            className={`${
              active ? '' : 'hidden'
            }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
          >
            <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
              <Link
                href={`${origin}`}
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:border-b-2 hover:border-primary"
              >
                Home
              </Link>
              <Link
                href={`${origin}/about`}
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:border-b-2 hover:border-primary"
              >
                About
              </Link>
              <Link
                href={`#`}
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:border-b-2 hover:border-primary"
              >
                Events
              </Link>
              <Link
                href={`${origin}/messages`}
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:border-b-2 hover:border-primary"
              >
                Messages
              </Link>
              <Link
                href={`#`}
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:border-b-2 hover:border-primary"
              >
                Branches
              </Link>
              <Link
                href={`${origin}/finance`}
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:border-b-2 hover:border-primary"
              >
                Finance
              </Link>
              <Link
                href={`${origin}/contact`}
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:border-b-2 hover:border-primary"
              >
                Contact Us
              </Link>
              <a
                href="https://www.paypal.com/donate/?hosted_button_id=2KFVJUBEPRDN4"
                target="_blank"
                rel="noreferrer"
                className="lg:inline-flex lg:w-auto w-full px-5 py-2 rounded-2xl text-primary text-center items-center justify-center bg-old-secondary hover:bg-tertiary hover:text-white shadow-md hover:shadow-2xl"
              >
                Donate
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
