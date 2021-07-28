import styled from 'styled-components'

import { media } from '../../../theme/media'
import { single } from '../../../theme/space'

export const Avatar = styled.img`
  border-radius: 50%;
  width: 100px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  ${media.greaterThan('md')`
    width: ${single() * 6}px;
  `}
`

export const ContainerContact = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-top: 15%;
`

export const Name = styled.p`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0px;
`

export const Description = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.main};
`

export const Social = styled.div`
  margin-top: 20px;
  a {
    color: ${({ theme }) => theme.colors.main};
    margin: 8px;
    transition: all 0.5s ease;
  }

  a:hover {
    opacity: 0.7;
  }
`
