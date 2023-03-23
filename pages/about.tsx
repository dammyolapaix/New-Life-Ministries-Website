import Image from 'next/image'
import Layout from '@/components/Layout'
import pastorPic from '../public/melyna-valle-3yiSaxd-V6Q-unsplash.jpg'
import Link from 'next/link'

const AboutPage = () => {
  return (
    <Layout>
      <header className="bg-gradient-to-b md:bg-gradient-to-r from-primary to-tertiary">
        <div className="container h-80 flex justify-center items-center">
          <h1 className="text-white font-bold text-4xl">About Us</h1>
        </div>
      </header>

      <section className="py-20">
        <div className="container">
          <h2 className="font-semibold text-4xl text-primary mb-3">
            Meet our pastors
          </h2>
          <p className="text-xl mb-5">
            These are the servants of Christ who have dedicated their lives to
            the Gospel of our Lord Jesus Christ.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <Link href={'#'}>
                <Image
                  src={pastorPic}
                  alt="pastorPic"
                  className="shadow-2xl mb-3"
                />
                <h3 className="font-medium text-lg text-center">Pastor Name</h3>
                <h4 className="text-center">Position</h4>
              </Link>
            </div>
            <div>
              <Link href={'#'}>
                <Image
                  src={pastorPic}
                  alt="pastorPic"
                  className="shadow-2xl mb-3"
                />
                <h3 className="font-medium text-lg text-center">Pastor Name</h3>
                <h4 className="text-center">Position</h4>
              </Link>
            </div>
            <div>
              <Link href={'#'}>
                <Image
                  src={pastorPic}
                  alt="pastorPic"
                  className="shadow-2xl mb-3"
                />
                <h3 className="font-medium text-lg text-center">Pastor Name</h3>
                <h4 className="text-center">Position</h4>
              </Link>
            </div>
            <div>
              <Link href={'#'}>
                <Image
                  src={pastorPic}
                  alt="pastorPic"
                  className="shadow-2xl mb-3"
                />
                <h3 className="font-medium text-lg text-center">Pastor Name</h3>
                <h4 className="text-center">Position</h4>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage
