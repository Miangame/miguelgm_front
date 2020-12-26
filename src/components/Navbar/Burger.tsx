import React, { useState } from 'react'
import { Router } from 'next/router'

import RightNav from './RightNav'
import { StyledBurger } from './styles'

const Burger = () => {
  const [open, setOpen] = useState(false)

  Router.events.on('routeChangeComplete', () => {
    setOpen(false)
  })

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} />
    </>
  )
}
export default Burger
