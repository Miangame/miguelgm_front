import React, { useEffect, useState } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import useDarkMode from 'use-dark-mode'
import { appWithTranslation } from 'next-i18next'

import Head from '../components/Head/Head'
import { GlobalStyles } from '../components/Global/GlobalStyles'
import Layout from '../components/Layout'
import { darkTheme, lightTheme } from '../theme/theme'

const App = (props: AppProps) => {
  const { Component, pageProps } = props

  const darkMode = useDarkMode()

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <></>
  }

  return (
    <ThemeProvider theme={darkMode.value ? darkTheme : lightTheme}>
      <Head />
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default appWithTranslation(App)
