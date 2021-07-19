import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/image-page.module.css'

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

        <div>
          <p>SRC SET</p>
          <div className={styles.imageholder}>
          <Image srcSet="https://cdn.tollbrothers.com/communities/13526/images-resized/Reserve-at-Center-Square-Villages-Collection-Barbour-Farmhouse-Kitchen-and-Living-Room-2_conversion1_920.jpg 768w,
            https://cdn.tollbrothers.com/communities/13526/images-resized/Reserve-at-Center-Square-Villages-Collection-Barbour-Farmhouse-Kitchen-and-Living-Room-2_conversion1_1920.jpg 800w" 
            sizes="(min-width: 800px) 800px,100vw" 
            src="https://cdn.tollbrothers.com/communities/13526/images-resized/Reserve-at-Center-Square-Villages-Collection-Barbour-Farmhouse-Kitchen-and-Living-Room-2_conversion1_1920.jpg" 
            className="community-hero-img" 
            layout='fill'
            alt="Creekside at Blue Bell" 
            fakeattribute="testing" unoptimized={true} />
            </div>
        </div>


        <div>
            <p>pure img tag</p>
            <img src="https://cdn.tollbrothers.com/communities/13526/images-resized/004_Toll_5_23_17_Alcott_conversion1_1800.jpg" /> 
        </div>



      </main>

    </div>
  )
}
