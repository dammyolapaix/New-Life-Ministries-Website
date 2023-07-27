import { MinistryDetails } from '@/components'
import Layout from '@/components/Layout'
import { IParams, IMinistry } from '@/interfaces'
import { getSingleMinistry } from '@/services'
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'

const SingleMinistryPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ ministry }) => {
  return (
    <Layout>
      <MinistryDetails ministry={ministry} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  ministry: IMinistry
}> = async ({ params }) => {
  const { slug } = params as IParams

  const ministry: IMinistry = await getSingleMinistry(slug)

  return { props: { ministry } }
}

export default SingleMinistryPage
