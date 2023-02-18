import { ReactNode } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Navbar from './Navbar'

type Props = {
  title: string
  description: string
  keywords: string
  children: ReactNode
}

export default function Layout({
  title,
  keywords,
  description,
  children,
}: Props) {
  const router = useRouter()

  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : ''

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${origin}${router.pathname}`} />
        <meta property="og:site_name" content={title} />

        <meta
          property="og:image"
          content={`${origin}/images/ShareLegee-Bulb-Icon-Logo-Blue-BG.png`}
        />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content={`${origin}/images/ShareLegee-Bulb-Icon-Logo-Blue-BG.png`}
        />
        <meta name="twitter:url" content={`${origin}${router.pathname}`} />
      </Head>
      <Navbar />
      {children}
    </div>
  )
}

Layout.defaultProps = {
  title: 'New Life Ministries Amsterdam',
  description: 'New Life Ministries Amsterdam',
  keywords: 'New Life Ministries Amsterdam',
}
