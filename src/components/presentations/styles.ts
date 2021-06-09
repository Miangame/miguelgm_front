import styled from 'styled-components'

import { media } from '../../theme/media'
import { doublePx, quadruplePx, singlePx } from '../../theme/space'

export const PresentationsListTitle = styled.h1`
  margin-bottom: ${singlePx()};

  ${media.greaterThan('md')`
    margin-bottom: ${doublePx()};
  `}

  ${media.greaterThan('xl')`
    display: none;
  `}
`

export const PresentationsListContainer = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${singlePx()};

  ${media.greaterThan('md')`
    grid-template-columns: 1fr 1fr;
  `}

  ${media.greaterThan('xl')`
    width: 70%;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: ${quadruplePx()};
  `}
`

export const PresentationBodyDetails = styled.div`
  height: 100%;

  a {
    margin-right: 15px;
  }
`
