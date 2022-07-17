import styled from 'styled-components'

import { media } from '../../../../../theme/media'

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
