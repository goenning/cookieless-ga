import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cookieless Google Analytics Example App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          This is just another page.
        </h1>
        <h3>Notice on your network tab that calls are being made to Google Analytics, but still no cookies!</h3>
        <p>
          <Link href="/"><a className={styles.a}>Back home</a></Link>
        </p>
      </main>
    </div>
  )
}
