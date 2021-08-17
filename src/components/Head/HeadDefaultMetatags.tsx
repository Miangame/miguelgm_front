import React from 'react'
import Head from 'next/head'

const HeadDefaultMetatags = (): JSX.Element => (
  <Head>
    <title>👨🏽‍💻 Miguel A. Gavilán | Web developer</title>
    <meta
      name="description"
      content="Portfolio de Miguel A. Gavilán, Software Engineer | Web Developer"
    />
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover"
    />
  </Head>
)

export default React.memo(HeadDefaultMetatags)
