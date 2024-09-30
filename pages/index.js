import Head from 'next/head'
import { Inter } from 'next/font/google'
import Script from 'next/script';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  return (
    <>
      <Head>
        <title>Best place</title>
        <meta name="description" content="Generated by undefined team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <Script
        id="google-analytics"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-TTZVLTGC8K"
        async
      />
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
      >
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-TTZVLTGC8K');`}
      </Script>
      </Head>
      <main></main>
    </>
  )
}

