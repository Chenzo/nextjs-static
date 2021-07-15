import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Simpilest Next JS App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Simple Page Content</h1>

        <Link href="/two">
          <a>Page Two</a>
        </Link>

        <Link href="/image-page">
          <a>Page Three - Image-page</a>
        </Link>

      </main>

      <footer className={styles.footer}>
        Footer
      </footer>
    </div>
  )
}
