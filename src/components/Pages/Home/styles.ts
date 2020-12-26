import styled, { keyframes } from 'styled-components'

import { colors } from '../../../theme/color'
import { media } from '../../../theme/media'
import { doublePx, quadruple, singlePx, triplePx } from '../../../theme/space'

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

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
`

export const DescriptionHomeContainer = styled.div`
  margin-top: ${triplePx()};
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
  font-size: 1.7em;

  ${media.greaterThan('md')`
    font-size: 2em;
  `}
`

export const DescriptionHome = styled.p`
  font-size: 1.2rem;

  ${media.greaterThan('md')`
    font-size: 1.4rem;
  `}
`

export const ImageHomeContainer = styled.div`
  width: 100%;
  text-align: center;
`

export const ProfileImageHome = styled.img`
  border-radius: 50%;
  width: 130px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  ${media.greaterThan('md')`
    width: 170px;
  `}
`

export const QuoteHome = styled.blockquote`
  font-size: 1.2em;
  width: 60%;
  margin: ${singlePx()} auto;
  font-family: Open Sans;
  font-style: italic;
  color: #555555;
  padding: 1.2em 30px 1.2em 75px;
  border-left: 8px solid ${colors.secondary};
  line-height: 1.6;
  position: relative;
  background: #ededed;

  .icon-container {
    font-size: 1.5em;
  }

  svg {
    color: ${colors.secondary};
    position: absolute;
    left: 15px;
    top: 0px;
  }

  &::after {
    content: '';
  }

  .author {
    display: block;
    color: #333333;
    font-style: normal;
    font-weight: bold;
    margin-top: 1em;
  }

  ${media.greaterThan('md')`
    font-size: 1.4em;
    margin: ${doublePx()} auto;

    .icon-container {
      font-size: 2em;
    }
  `}

  ${media.greaterThan('lg')`
    margin: ${quadruple()}px auto 0 auto;
  `}
`
