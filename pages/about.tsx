import Image from 'next/image'
import Layout from '@/components/Layout'
import pastorPic from '../public/melyna-valle-3yiSaxd-V6Q-unsplash.jpg'
import Link from 'next/link'
import { Pastors } from '@/components'
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { IPastorsRes } from '@/interfaces'
import { getPastors } from '@/services'

const AboutPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  pastorsRes,
}) => {
  return (
    <Layout>
      <header className="bg-gradient-to-b md:bg-gradient-to-r from-primary to-tertiary">
        <div className="container h-80 flex justify-center items-center">
          <h1 className="text-white font-bold text-4xl">About Us</h1>
        </div>
      </header>

      <section className="py-20">
        <Pastors pastors={pastorsRes.data} />
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<{
  pastorsRes: IPastorsRes
}> = async () => {
  const pastorsRes: IPastorsRes = await getPastors()

  if (!pastorsRes) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      pastorsRes,
    },
    revalidate: 1,
  }
}

export default AboutPage
