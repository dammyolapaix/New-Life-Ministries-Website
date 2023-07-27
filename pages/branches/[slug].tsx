import { BranchDetails, Layout } from '@/components'
import { IBranch, IParams } from '@/interfaces'
import { getSingleBranch } from '@/services'
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import React from 'react'

const BranchDetailsPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ branch }) => {
  return (
    <Layout>
      <BranchDetails branch={branch} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  branch: IBranch
}> = async ({ params }) => {
  const { slug } = params as IParams

  const branch: IBranch = await getSingleBranch(slug)

  return { props: { branch } }
}
export default BranchDetailsPage
