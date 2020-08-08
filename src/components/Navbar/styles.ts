import styled from 'styled-components'

import { media } from '../../theme/media'
import { NavigationMenu } from '../../interfaces/navigationMenu'

export const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: center;

  ${media.greaterThan('md')`
    border-bottom: none;
  `}
`

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin-top: 0;

  li {
    padding: 18px 16px;
  }

  ${(props: NavigationMenu) => {
    if (props.open) {
      return media.lessThan('md')`
        transform: translateX(0);
      `
    }

    return media.lessThan('md')`
      transform: translateX(100%);
    `
  }}

  ${media.lessThan('md')`
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  `}
`

export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;

  ${media.lessThan('md')`
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  `}

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${(props: NavigationMenu) =>
      props.open ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${(props: NavigationMenu) =>
        props.open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${(props: NavigationMenu) =>
        props.open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${(props: NavigationMenu) => (props.open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${(props: NavigationMenu) =>
        props.open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`
