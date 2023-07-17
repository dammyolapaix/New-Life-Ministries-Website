import { PastorDetails } from '@/components'
import Layout from '@/components/Layout'
import { IParams, IPastor } from '@/interfaces'
import { sanityClient } from '@/lib'

import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  InferGetStaticPropsType,
  NextPage,
} from 'next'

const SinglePastorPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ pastor }) => {
  console.log(pastor)
  return (
    <Layout>
      <PastorDetails pastor={pastor} />{' '}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  pastor: IPastor
}> = async ({ params }) => {
  const { slug } = params as IParams

  console.log(slug)

  const query = `*[_type == 'pastor' && slug.current == "${slug}"][0]`

  const pastor: IPastor = await sanityClient.fetch(query)

  console.log(pastor)

  return { props: { pastor } }
}

export default SinglePastorPage
