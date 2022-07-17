import styled from 'styled-components'

import { media } from '../../../../../theme/media'

export const AboutMeContainer = styled.section`
  display: block;

  ${media.greaterThan('lg')`
    display: grid;
    grid-template-columns: 2fr 1fr;
    width: 90vw;
    max-width: 90vw;
    margin-left: calc(50% - 45vw);
  `}
`

export const TitleHome = styled.h3`
  font-size: 1.5em;
`
