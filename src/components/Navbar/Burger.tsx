import React, { useState } from 'react'
import { Router } from 'next/router'

import RightNav from './RightNav'
import { StyledBurger } from './styles'

const Burger = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false)

  Router.events.on('routeChangeComplete', () => {
    setOpen(false)
  })

  return (
    <>
      <StyledBurger open={open} onClick={(): void => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} />
    </>
  )
}
export default React.memo(Burger)
