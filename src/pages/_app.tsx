import React from 'react'
import 'typeface-rubik'
import { AppProps } from 'next/app'

import Head from '../components/Head/Head'
import Layout from '../layout/Layout'
import { GlobalStyles } from '../components/Global/GlobalStyles'

const App = (props: AppProps) => {
  const { Component, pageProps } = props

  return (
    <>
      <Head />
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App
