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

  return <Component {...pageProps} />
}

export default MyApp
