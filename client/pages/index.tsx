import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Squares from '../components/Squares'
import About from '../components/About'
import Numbers from '../components/Numbers'
import styles from '../styles/HomePage.module.css'


function HomePage() {

  return (
    <div>
      <Head>
        <title>Klub sportovních rybářů Kněžice</title>
        <meta name="Klub sportovních rybářů Kněžice" content="Oficiální stránky klubu" />
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <header className={styles.Header}>
        <Navbar />
        <Header />
      </header>
      <main>
        <Squares />
        <About />
        <Numbers />
        <h1>Main</h1>
      </main>

      <footer>
        <p>Patička</p>
        <h3><Link href="/zavody"><a>Závody</a></Link></h3>
        <h3><Link href="/administrace"><a>Administrace</a></Link></h3>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default HomePage
