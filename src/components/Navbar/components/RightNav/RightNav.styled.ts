import styled from 'styled-components'

import { NavigationMenu } from '../../../../interfaces/navigationMenu'
import { media } from '../../../../theme/media'

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin-top: 0;
  padding-left: 0;
  z-index: 1;

  li {
    cursor: pointer;
    padding: 18px 16px;
    display: flex;
    align-items: center;
    transition: all 0.4s ease;
  }

  li.active {
    background: ${({ theme }): string => theme.colors.main};
    border-radius: 5px;

    & > a {
      color: ${({ theme }): string => theme.colors.navigation};
    }
  }

  li a {
    color: ${({ theme }): string => theme.text};
    text-decoration: none;
  }

  ${(props: NavigationMenu): string => {
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
    background-color: ${({ theme }): string => theme.colors.main};
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li a{
      color: ${({ theme }): string => theme.colors.navigation};
    }
    li:hover {
      background: none;
    }
  `}
`
