import React, { memo } from 'react'

import Burger from './components/Burguer/Burger'
import { Nav } from './Navbar.styled'

const Navbar = (): JSX.Element => {
  return (
    <Nav>
      <Burger />
    </Nav>
  )
}

export default memo(Navbar)
