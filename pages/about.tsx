import Layout from '@/components/Layout'
import { Ministries, Pastors } from '@/components'
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { IMinistriesRes, IPastorsRes } from '@/interfaces'
import { getMinistries, getPastors } from '@/services'

const AboutPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  pastorsRes,
  ministriesRes,
}) => {
  return (
    <Layout>
      <header className="bg-gradient-to-b md:bg-gradient-to-r from-primary to-tertiary">
        <div className="container h-80 flex justify-center items-center">
          <h1 className="text-white font-bold text-4xl">About Us</h1>
        </div>
      </header>

      <div className="my-20">
        <Pastors pastors={pastorsRes.data} />
      </div>

      <div className="my-20">
        <Ministries ministries={ministriesRes.data} />
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<{
  pastorsRes: IPastorsRes
  ministriesRes: IMinistriesRes
}> = async () => {
  const pastorsRes: IPastorsRes = await getPastors()
  const ministriesRes: IMinistriesRes = await getMinistries()

  if (!pastorsRes && !ministriesRes) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      pastorsRes,
      ministriesRes,
    },
    revalidate: 1,
  }
}

export default AboutPage
