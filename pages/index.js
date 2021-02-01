import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cookieless Google Analytics Example App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Cookieless Google Analytics Example App
        </h1>
        <p>Open your Dev console and try to find any cookie created by this website. You won't!</p>
        <p>
          <Link href="/about"><a className={styles.a}>Go to /about</a></Link>
        </p>
        <footer className={styles.footer}>This site is open source: <a className={styles.a} href="https://github.com/goenning/cookieless-ga">https://github.com/goenning/cookieless-ga</a></footer>
      </main>
    </div>
  )
}
