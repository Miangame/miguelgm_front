import styled from 'styled-components'

import { single, quadruplePx } from '../../theme/space'
import { media } from '../../theme/media'

export const Avatar = styled.img`
  border-radius: 50%;
  width: ${quadruplePx()};

  ${media.greaterThan('md')`
    width: ${single() * 6}px;
  `}
`
