import { MinistryDetails } from '@/components'
import Layout from '@/components/Layout'
import { IMinistriesRes, IMinistry, IParams } from '@/interfaces'
import { getMinistries, getSingleMinistry } from '@/services'
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next'

const SingleMinistryPage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ ministry }) => {
  return (
    <Layout>
      <MinistryDetails ministry={ministry} />
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const ministriesRes: IMinistriesRes = await getMinistries()

  const paths = ministriesRes.data.map((ministry) => ({
    params: { slug: ministry.attributes.slug },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<{
  ministry: IMinistry
}> = async ({ params }) => {
  const { slug } = params as IParams
  const { data } = await getSingleMinistry(slug)

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      ministry: data[0],
    },
    revalidate: 1,
  }
}

export default SingleMinistryPage
