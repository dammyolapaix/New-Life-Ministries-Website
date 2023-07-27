import { Messages } from '@/components'
import Layout from '@/components/Layout'
import { NextPage } from 'next'

const MessagesPage: NextPage = () => {
  return (
    <Layout>
      <header className="bg-gradient-to-b md:bg-gradient-to-r from-primary to-tertiary">
        <div className="container h-80 flex justify-center items-center">
          <h1 className="text-white font-bold text-4xl">Messages</h1>
        </div>
      </header>
      <Messages />
    </Layout>
  )
}

export default MessagesPage
