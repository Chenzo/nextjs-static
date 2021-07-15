import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Simpilest Next JS App | Page 2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Page 2 Content</h1>

        <Link href="/">
          <a>Home</a>
        </Link>

      </main>

    </div>
  )
}
