import { BranchDetails, Layout } from '@/components'
import { IBranch, IBranchesRes, IParams } from '@/interfaces'
import { getBranches, getSingleBranch } from '@/services'
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next'
import React from 'react'

const BranchDetailsPage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ branch }) => {
  return (
    <Layout>
      <BranchDetails branch={branch} />
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const branchesRes: IBranchesRes = await getBranches()

  const paths = branchesRes.data.map((branch) => ({
    params: { slug: branch.attributes.slug },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<{
  branch: IBranch
}> = async ({ params }) => {
  const { slug } = params as IParams
  const { data } = await getSingleBranch(slug)

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      branch: data[0],
    },
    revalidate: 1,
  }
}

export default BranchDetailsPage
