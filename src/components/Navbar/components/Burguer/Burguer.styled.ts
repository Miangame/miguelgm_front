import styled from 'styled-components'

import { NavigationMenu } from '../../../../interfaces/navigationMenu'
import { media } from '../../../../theme/media'

interface StyledBurgerProps {
  open: boolean
}

export const StyledBurger = styled.div<StyledBurgerProps>`
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
    background-color: ${({ theme, open }): string =>
      open ? theme.colors.menuButtonOpened : theme.colors.menuButtonClosed};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${(props: NavigationMenu): string =>
        props.open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${(props: NavigationMenu): string =>
        props.open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${(props: NavigationMenu): number => (props.open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${(props: NavigationMenu): string =>
        props.open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`
