import React, { memo } from 'react'

import { LayoutProps } from '../../interfaces/layout'
import Navbar from '../Navbar/Navbar'

import { LayoutContainer, LayoutChildrenContainer } from './Layout.styled'

const Layout = ({ children }: LayoutProps): JSX.Element => (
  <>
    <Navbar />
    <LayoutContainer>
      <LayoutChildrenContainer>{children}</LayoutChildrenContainer>
    </LayoutContainer>
  </>
)

export default memo(Layout)
