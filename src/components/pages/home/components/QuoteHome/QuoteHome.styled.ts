import styled from 'styled-components'

import { media } from '../../../../../theme/media'
import { doublePx, quadruple, singlePx } from '../../../../../theme/space'

export const QuoteHomeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Quote = styled.blockquote`
  font-size: 1.2em;
  width: 80%;
  margin: ${singlePx()} 0;
  font-family: Open Sans;
  font-style: italic;
  color: #555555;
  padding: 1.2em 30px 1.2em 35px;
  border-left: 8px solid ${({ theme }): string => theme.colors.main};
  line-height: 1.6;
  position: relative;
  background: #ededed;

  .fa-quote-left {
    color: ${({ theme }): string => theme.colors.main};
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
