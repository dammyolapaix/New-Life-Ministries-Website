import { PastorDetails } from '@/components'
import Layout from '@/components/Layout'
import { IParams } from '@/interfaces'
import { IPastor, IPastorsRes } from '@/interfaces/IPastor'
import { getPastors, getSinglePastor } from '@/services'
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next'

const SinglePastorPage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ pastor }) => {
  return (
    <Layout>
      <PastorDetails pastor={pastor} />
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pastorsRes: IPastorsRes = await getPastors()

  const paths = pastorsRes.data.map((event) => ({
    params: { slug: event.attributes.slug },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<{
  pastor: IPastor
}> = async ({ params }) => {
  const { slug } = params as IParams
  const { data } = await getSinglePastor(slug)

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      pastor: data[0],
    },
    revalidate: 1,
  }
}

export default SinglePastorPage
