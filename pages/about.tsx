import Layout from '@/components/Layout'
import { Pastors } from '@/components'
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { IPastor } from '@/interfaces'
import { getPastors } from '@/services'

const AboutPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ pastors }) => {
  return (
    <Layout>
      <header className="bg-gradient-to-b md:bg-gradient-to-r from-primary to-tertiary">
        <div className="container h-80 flex justify-center items-center">
          <h1 className="text-white font-bold text-4xl">About Us</h1>
        </div>
      </header>

      <div className="my-20">
        <Pastors pastors={pastors} />
      </div>

      {/* <div className="my-20">
        <Ministries ministries={ministriesRes.data} />
      </div> */}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  pastors: IPastor[]
}> = async () => {
  const pastors: IPastor[] = await getPastors()

  return { props: { pastors } }
}

export default AboutPage
