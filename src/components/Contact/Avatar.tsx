import styled from 'styled-components'

import { single } from '../../theme/space'
import { media } from '../../theme/media'

export const Avatar = styled.img`
  border-radius: 50%;
  width: 100px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

  ${media.greaterThan('md')`
    width: ${single() * 6}px;
  `}
`
