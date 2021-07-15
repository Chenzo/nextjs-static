import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Simpilest Next JS App | Image Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Image Page Test</h1>

        <Link href="/">
          <a>Home</a>
        </Link>

      </main>

    </div>
  )
}
