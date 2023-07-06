import { Layout } from '@/components'
import { NextPage } from 'next'
import Link from 'next/link'

const FinancePage: NextPage = () => {
  return (
    <Layout>
      <header className="bg-gradient-to-b md:bg-gradient-to-r from-primary to-tertiary">
        <div className="container h-80 flex justify-center items-center">
          <h1 className="text-white font-bold text-4xl">Our Finance</h1>
        </div>
      </header>

      <div className="container mt-20">
        <div className="flex justify-between items-center bg-light py-3 px-5 rounded-md my-5">
          <div className="">Financial Reports 2021</div>
          <Link
            href={
              'https://assets.ctfassets.net/hpf25ynk4a49/T5ezAKt3j7m71HLucieSz/c40b3cea5485845018d1101de44bab04/Financial_Reports_2021.pdf'
            }
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 bg-tertiary rounded-md text-white hover:bg-gradient-to-r from-primary to-secondary"
          >
            Download Report
          </Link>
        </div>
        <div className="flex justify-between items-center bg-light py-3 px-5 rounded-md my-5">
          <div className="">Financial Reports 2022</div>
          <Link
            href={
              'https://assets.ctfassets.net/hpf25ynk4a49/4XhU6qKg3sWELo7RDm6LjF/607a45ef635c504b889e2726a09e263a/Financial_Reports_2022.pdf'
            }
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 bg-tertiary rounded-md text-white hover:bg-gradient-to-r from-primary to-secondary"
          >
            Download Report
          </Link>
        </div>
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

export default FinancePage
