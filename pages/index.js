import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>CS60 APA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main>

      </main>
      </div>
  );
}
