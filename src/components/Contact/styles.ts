import styled from 'styled-components'

import { colors } from '../../theme/color'
import { media } from '../../theme/media'

export const ContainerContact = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;

  ${media.greaterThan('md')`
    margin-top: 15%;
  `}
`

export const Name = styled.p`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0px;
`

export const Description = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: ${colors.secondary};
`

export const Social = styled.div`
  margin-top: 20px;
  a {
    color: ${colors.secondary};
    margin: 8px;
    transition: all 0.5s ease;
  }

  a:hover {
    color: ${colors.primary};
  }
`
