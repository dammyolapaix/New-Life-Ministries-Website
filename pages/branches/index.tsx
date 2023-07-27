import { Branches, Layout } from '@/components'
import { IBranch } from '@/interfaces'
import { getBranches } from '@/services'
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'

const BranchesPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ branches }) => {
  return (
    <Layout>
      <header className="bg-gradient-to-b md:bg-gradient-to-r from-primary to-tertiary">
        <div className="container h-80 flex justify-center items-center">
          <h1 className="text-white font-bold text-4xl">Our Branches</h1>
        </div>
      </header>

      <section className="py-20 bg-gray-200">
        <Branches branches={branches} />
      </section>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  branches: IBranch[]
}> = async () => {
  const branches: IBranch[] = await getBranches()

  return { props: { branches } }
}

export default BranchesPage
