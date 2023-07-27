import { EventItem, Layout } from '@/components'
import { IEvent } from '@/interfaces'
import { getEvents } from '@/services'
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'

const EventsPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ events }) => {
  return (
    <Layout>
      <header className="bg-gradient-to-b md:bg-gradient-to-r from-primary to-tertiary">
        <div className="container h-80 flex justify-center items-center">
          <h1 className="text-white font-bold text-4xl">All Events</h1>
        </div>
      </header>

      <section className="py-20 bg-gray-200">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10">
          {events.map((event) => (
            <EventItem key={event.id} event={event} />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  events: IEvent[]
}> = async () => {
  const events: IEvent[] = await getEvents()

  return { props: { events } }
}

export default EventsPage
