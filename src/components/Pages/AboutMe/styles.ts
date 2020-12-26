import styled from 'styled-components'

import { media } from '../../../theme/media'

export const AboutMeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
`

export const TitleAboutMe = styled.h2`
  font-size: 1.7em;

  ${media.greaterThan('md')`
    font-size: 2em;
  `}
`

export const SubtitleAboutMe = styled.p`
  font-size: 1.4em;
  margin-top: 0;
  margin-bottom: 0;

  ${media.greaterThan('md')`
    font-size: 1.6em;
  `}
`

export const DescriptionAboutMe = styled.section`
  font-size: 1.2rem;

  ${media.greaterThan('md')`
    font-size: 1.4rem;
  `}
`
