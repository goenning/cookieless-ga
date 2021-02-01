import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import '../styles/globals.css'

const pageView = () => {
  if (!window.gtag) {
    return
  }

  gtag('config', 'UA-47250005-4', { page_path: location.pathname, client_storage: 'none', anonymize_ip: true, client_id: window.user_id })
}

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    pageView()

    router.events.on('routeChangeComplete', pageView)
    return () => {
      router.events.off('routeChangeComplete', pageView)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Cookieless Google Analytics Example App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>
          Cookieless Google Analytics Example App
        </h1>
      </header>

      <nav>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/about"><a>About</a></Link></li>
          <li><Link href="/contact"><a>Contact</a></Link></li>
        </ul>
      </nav>

      <Component {...pageProps} />

      <footer>
        <div>
          This site is open source
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          <a href="https://github.com/goenning/cookieless-ga" target="_blank">https://github.com/goenning/cookieless-ga</a>
        </div>
      </footer>
    </>
  )
}

export default MyApp
