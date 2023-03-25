import EventDetails from '@/components/EventDetails'
import Layout from '@/components/Layout'
import { IEvent, IEventsRes, IParams } from '@/interfaces'
import { getEvents, getSingleEvent } from '@/services'
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next'

const SingleEventPage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ event }) => {
  return (
    <Layout>
      <EventDetails event={event} />
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const eventsRes: IEventsRes = await getEvents()

  const paths = eventsRes.data.map((event) => ({
    params: { slug: event.attributes.slug },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<{
  event: IEvent
}> = async ({ params }) => {
  const { slug } = params as IParams
  const { data } = await getSingleEvent(slug)

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      event: data[0],
    },
    revalidate: 1,
  }
}

export default SingleEventPage
