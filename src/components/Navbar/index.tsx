import React from 'react'

import Burger from './Burger'
import { Nav } from './styles'

const Navbar = (): JSX.Element => {
  return (
    <Nav>
      <Burger />
    </Nav>
  )
}

export default React.memo(Navbar)
