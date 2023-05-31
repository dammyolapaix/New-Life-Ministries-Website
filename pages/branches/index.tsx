import { Branches, Layout } from '@/components'
import { IBranchesRes } from '@/interfaces'
import { getBranches } from '@/services'
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'

const BranchesPage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ branchesRes }) => {
  return (
    <Layout>
      <header className="bg-gradient-to-b md:bg-gradient-to-r from-primary to-tertiary">
        <div className="container h-80 flex justify-center items-center">
          <h1 className="text-white font-bold text-4xl">Our Branches</h1>
        </div>
      </header>

      <section className="py-20 bg-gray-200">
        <Branches branches={branchesRes.data} />
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<{
  branchesRes: IBranchesRes
}> = async () => {
  const branchesRes: IBranchesRes = await getBranches()

  if (!branchesRes) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      branchesRes,
    },
    revalidate: 1,
  }
}

export default BranchesPage
