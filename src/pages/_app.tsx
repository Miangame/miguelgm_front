import React from 'react'
import App from 'next/app'

import Head from '../components/Head/Head'
import Layout from '../layout/Layout'
import { GlobalStyles } from '../components/Global/GlobalStyles'

class LandingApp extends App {
  public render () {
    const { Component, pageProps } = this.props
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
}

export default LandingApp
