import React from 'react'
import Head from 'next/head'

const HeadDefaultMetatags = () => (
  <Head>
    <html lang="es" />
    <title>👨🏽‍💻 Miguel A. Gavilán | Web developer</title>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=5, viewport-fit=cover"
    />
  </Head>
)

export default React.memo(HeadDefaultMetatags)
