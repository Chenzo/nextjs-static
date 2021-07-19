import Head from 'next/head'
import Link from 'next/link'
//import Image from 'next/image'

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


        <div>
            <p>Image Below</p>
            {/* <Image src="/img/vercel.svg" alt="Toll Logo" width={200} height={50} /> */}
            <img src="https://www.tollbrothers.com/tb/images/home_slideshow/metro-crossing.jpg" alt="Toll Logo" />
        </div>

      </main>

    </div>
  )
}
