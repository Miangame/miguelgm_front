import React from 'react'

import { LayoutProps } from '../interfaces/layout'
import Navbar from '../components/Navbar/Navbar'

const Layout = (props: LayoutProps) => {
  const { children } = props

  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout
