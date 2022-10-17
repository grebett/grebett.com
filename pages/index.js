import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Ballast (par Grebett)" />
        <p className="description">
          Bonjour et bienvenue sur cette page en cours de construction.
        </p>
      </main>

      <Footer />
    </div>
  )
}
