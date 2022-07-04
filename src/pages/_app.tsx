import '../styles/fonts.css'
import { ThemeProvider } from 'styled-components'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider as NextAuthProvider } from 'next-auth/client'

import * as theme from 'styles/theme'
import GlobalStyles from 'styles/Globals'

import Navbar from 'components/Navbar'

function MyApp({ Component, pageProps }: AppProps & { nonce?: string }) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Head>
        <title>Platform Dev</title>
        <meta name="description" content="Platform Dev website" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </NextAuthProvider>
  )
}

export default MyApp
