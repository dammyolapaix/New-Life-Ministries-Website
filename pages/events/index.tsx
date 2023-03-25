import Layout from '@/components/Layout'
import { getEvents } from '@/services'
import { IEventsRes } from '@/interfaces'
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { EventItem } from '@/components'

const EventsPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  eventsRes,
}) => {
  return (
    <Layout>
      <header className="bg-gradient-to-b md:bg-gradient-to-r from-primary to-tertiary">
        <div className="container h-80 flex justify-center items-center">
          <h1 className="text-white font-bold text-4xl">All Events</h1>
        </div>
      </header>

      <section className="py-20 bg-gray-200">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10">
          {eventsRes.data.map((event) => (
            <EventItem key={event.id} event={event} />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<{
  eventsRes: IEventsRes
}> = async () => {
  const eventsRes: IEventsRes = await getEvents()

  console.log(eventsRes)

  if (!eventsRes) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      eventsRes,
    },
    revalidate: 1,
  }
}

export default EventsPage
