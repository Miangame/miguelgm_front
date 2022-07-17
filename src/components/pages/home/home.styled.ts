import styled from 'styled-components'

import { media } from '../../../theme/media'
import { doublePx, quadruplePx, triplePx } from '../../../theme/space'

export const HomeContainer = styled.div`
  width: 90%;
  display: flex;
  flex-flow: column;
  padding-top: ${doublePx()};

  ${media.greaterThan('md')`
    width: 70%;
    padding-top: ${triplePx()};
  `}

  ${media.greaterThan('lg')`
    width: 70%;
    padding-top: ${quadruplePx()};
  `}
`
