import { Messages } from '@/components'
import Layout from '@/components/Layout'
import { IMessagesRes } from '@/interfaces'
import { getMessages } from '@/services'
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Link from 'next/link'
import { AiOutlineYoutube } from 'react-icons/ai'

const MessagesPage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ messagesRes }) => {
  return (
    <Layout>
      <header className="bg-gradient-to-b md:bg-gradient-to-r from-primary to-tertiary">
        <div className="container h-80 flex justify-center items-center">
          <h1 className="text-white font-bold text-4xl">Messages</h1>
        </div>
      </header>
      <Messages messagesRes={messagesRes} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<{
  messagesRes: IMessagesRes
}> = async () => {
  const messagesRes: IMessagesRes = await getMessages()

  if (!messagesRes) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      messagesRes,
    },
    revalidate: 1,
  }
}

export default MessagesPage
