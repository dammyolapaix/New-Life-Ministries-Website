import { Layout } from '@/components'
import { IFinance } from '@/interfaces'
import { sanityClient } from '@/lib'
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import Link from 'next/link'

const FinancePage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ finances }) => {
  return (
    <Layout>
      <header className="bg-gradient-to-b md:bg-gradient-to-r from-primary to-tertiary">
        <div className="container h-80 flex justify-center items-center">
          <h1 className="text-white font-bold text-4xl">Our Finance</h1>
        </div>
      </header>

      <div className="container mt-20">
        {finances.map((finance) => (
          <div
            key={finance._id}
            className="flex justify-between items-center bg-light py-3 px-5 rounded-md my-5"
          >
            <div className="">{finance.name}</div>
            <Link
              href={
                finance.report
                  ? `https://cdn.sanity.io/files/q9bzhdm3/production/${
                      finance.report.asset._ref.split('-')[1]
                    }.pdf`
                  : '#'
              }
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 bg-tertiary rounded-md text-white hover:bg-gradient-to-r from-primary to-secondary"
            >
              Download Report
            </Link>
          </div>
        ))}

        <div className="flex justify-center items-center rounded-md my-20">
          <Link
            href={'https://anbi.nl/publicatieverplichting/new-life-ministry/'}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 bg-tertiary rounded-md text-white hover:bg-gradient-to-r from-primary to-secondary"
          >
            Learn More
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  finances: IFinance[]
}> = async () => {
  const query = `*[_type == 'finance'] | order(_createdAt desc)`

  const finances: IFinance[] = await sanityClient.fetch(query)

  return { props: { finances } }
}

export default FinancePage
