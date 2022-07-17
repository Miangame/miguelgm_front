import styled, { keyframes } from 'styled-components'

import { media } from '../../../../../theme/media'
import { singlePx } from '../../../../../theme/space'

const waveAnimation = keyframes`
   0% { transform: rotate( 0.0deg) }
   10% { transform: rotate(14.0deg) }  /* The following five values can be played with to make the waving more or less extreme */
   20% { transform: rotate(-8.0deg) }
   30% { transform: rotate(14.0deg) }
   40% { transform: rotate(-4.0deg) }
   50% { transform: rotate(10.0deg) }
   60% { transform: rotate( 0.0deg) }  /* Reset for the last half to pause */
  100% { transform: rotate( 0.0deg) }
`

export const DescriptionHomeContainer = styled.div`
  margin-top: ${singlePx()};
  margin-bottom: ${singlePx()};
`

export const HiHome = styled.p`
  font-size: 1.2rem;

  span {
    display: inline-block;
    animation: 2.5s infinite ${waveAnimation};
    transform-origin: 70% 70%;
  }
`

export const NameHome = styled.h2`
  margin-bottom: 0;
  font-size: 1.7em;

  ${media.greaterThan('md')`
    font-size: 2em;
  `}
`

export const SubtitleHomeDescription = styled.p`
  font-weight: 100;
  color: ${({ theme }): string => theme.colors.main};
`

export const ParagraphDescription = styled.p`
  line-height: 1.6em;
  font-size: 1rem;

  ${media.greaterThan('md')`
      font-size: 1.3rem;
    `}
`
