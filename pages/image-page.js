import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

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
            <Image src="/img/vercel.svg" alt="Toll Logo" width={200} height={50} fakeattribute="testing" unoptimized={true} /> 
        </div>

        <div>
            <p>CDN image Below</p>
            <Image src="https://cdn.tollbrothers.com/communities/13526/images-resized/004_Toll_5_23_17_Alcott_conversion1_1800.jpg" alt="Toll Logo" width={1222} height={815} fakeattribute="testing" unoptimized={true} /> 
        </div>

      </main>

    </div>
  )
}
