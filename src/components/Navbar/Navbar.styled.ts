import styled from 'styled-components'

import { media } from '../../theme/media'

export const Nav = styled.nav`
  width: 100%;
  height: 25px;
  display: flex;
  justify-content: center;
  margin-top: 40px;

  ${media.greaterThan('md')`
    border-bottom: none;
  `}
`
