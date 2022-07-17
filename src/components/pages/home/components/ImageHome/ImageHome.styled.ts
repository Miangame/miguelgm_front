import styled from 'styled-components'
import Image from 'next/image'

import { media } from '../../../../../theme/media'

export const ImageHomeContainer = styled.picture`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const ProfileImageHome = styled(Image)`
  border-radius: 50%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`

export const ProfileImageHomeContainer = styled.div`
  position: relative;
  width: 130px;
  height: 130px;

  & > span {
    overflow: initial !important;
  }

  ${media.greaterThan('md')`
    width: 170px;
    height: 170px;
  `}
`
