import { PastorDetails } from '@/components'
import Layout from '@/components/Layout'
import { IParams, IPastor } from '@/interfaces'
import { getSinglePastor } from '@/services'
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'

const SinglePastorPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ pastor }) => {
  return (
    <Layout>
      <PastorDetails pastor={pastor} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  pastor: IPastor
}> = async ({ params }) => {
  const { slug } = params as IParams

  const pastor: IPastor = await getSinglePastor(slug)

  return { props: { pastor } }
}

export default SinglePastorPage
