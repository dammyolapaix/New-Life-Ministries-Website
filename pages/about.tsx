import Layout from '@/components/Layout'
import { Ministries, Pastors } from '@/components'
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { IMinistry, IPastor } from '@/interfaces'
import { getMinistries, getPastors } from '@/services'

const AboutPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ pastors, ministries }) => {
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

      <div className="my-20">
        <Ministries ministries={ministries} />
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  pastors: IPastor[]
  ministries: IMinistry[]
}> = async () => {
  const pastors: IPastor[] = await getPastors()
  const ministries: IPastor[] = await getMinistries()

  return { props: { pastors, ministries } }
}

export default AboutPage
