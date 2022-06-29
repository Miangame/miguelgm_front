import React from 'react'

import { LayoutProps } from '../../interfaces/layout'
import Navbar from '../Navbar'

import { LayoutContainer, LayoutChildrenContainer } from './styles'

const Layout = ({ children }: LayoutProps): JSX.Element => (
  <>
    <Navbar />
    <LayoutContainer>
      <LayoutChildrenContainer>{children}</LayoutChildrenContainer>
    </LayoutContainer>
  </>
)

export default Layout
