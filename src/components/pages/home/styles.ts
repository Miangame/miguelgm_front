import styled, { keyframes } from 'styled-components'

import { media } from '../../../theme/media'
import {
  doublePx,
  quadruple,
  quadruplePx,
  singlePx,
  triplePx
} from '../../../theme/space'

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

export const DescriptionHomeContainer = styled.div`
  margin-top: ${singlePx()};
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

export const TitleHome = styled.h3`
  font-size: 1.5em;
`

export const SubtitleHome = styled.p`
  font-weight: 100;
  color: ${({ theme }) => theme.colors.main};
`

export const DescriptionHome = styled.div`
  p {
    line-height: 1.6em;
    font-size: 1rem;

    ${media.greaterThan('md')`
      font-size: 1.3rem;
    `}
  }
`

export const ImageHomeContainer = styled.picture`
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

export const AboutMe = styled.section`
  display: block;

  ${media.greaterThan('lg')`
    display: grid;
    grid-template-columns: 2fr 1fr;
    width: 90vw;
    max-width: 90vw;
    margin-left: calc(50% - 45vw);
  `}
`

export const QuoteHome = styled.blockquote`
  font-size: 1.2em;
  width: 80%;
  margin: ${singlePx()} 0;
  font-family: Open Sans;
  font-style: italic;
  color: #555555;
  padding: 1.2em 30px 1.2em 35px;
  border-left: 8px solid ${({ theme }) => theme.colors.main};
  line-height: 1.6;
  position: relative;
  background: #ededed;

  .fa-quote-left {
    color: ${({ theme }) => theme.colors.main};
    font-size: 1.5em;
    position: absolute;
    left: 15px;
    top: 0px;
  }

  &::after {
    content: '';
  }

  span {
    display: block;
    color: #333333;
    font-style: normal;
    font-weight: bold;
    margin-top: 1em;
  }

  ${media.greaterThan('md')`
    font-size: 1.4em;
    margin: ${doublePx()} 0;

    .fa-quote-left {
      font-size: 2em;
    }
  `}

  ${media.greaterThan('lg')`
    margin: ${quadruple()}px 0 0 0;
  `}
`
