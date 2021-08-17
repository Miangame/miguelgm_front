import React from 'react'

import { LayoutProps } from '../../interfaces/layout'
import Navbar from '../Navbar'

import { LayoutContainer, LayoutChildrenContainer } from './styles'

const Layout = (props: LayoutProps): JSX.Element => {
  const { children } = props

  return (
    <>
      <Navbar />
      <LayoutContainer>
        <LayoutChildrenContainer>{children}</LayoutChildrenContainer>
      </LayoutContainer>
    </>
  )
}

export default Layout
