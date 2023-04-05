import { MessageDetails } from '@/components'
import Layout from '@/components/Layout'
import { IMessage, IMessagesRes, IParams } from '@/interfaces'
import { getMessages, getSingleMessage } from '@/services'
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next'

const SingleMessagePage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ message }) => {
  return (
    <Layout>
      <MessageDetails message={message} />
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const messagesRes: IMessagesRes = await getMessages()

  const paths = messagesRes.data.map((message) => ({
    params: { slug: message.attributes.youtubeId },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<{
  message: IMessage
}> = async ({ params }) => {
  const { slug } = params as IParams
  const { data } = await getSingleMessage(slug)

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      message: data[0],
    },
    revalidate: 1,
  }
}

export default SingleMessagePage
