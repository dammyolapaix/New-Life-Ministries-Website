import EventDetails from '@/components/EventDetails'
import Layout from '@/components/Layout'
import { IEvent, IParams } from '@/interfaces'
import { getSingleEvent } from '@/services'
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'

const SingleEventPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ event }) => {
  return (
    <Layout>
      <EventDetails event={event} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  event: IEvent
}> = async ({ params }) => {
  const { slug } = params as IParams

  const event: IEvent = await getSingleEvent(slug)

  return { props: { event } }
}

export default SingleEventPage
