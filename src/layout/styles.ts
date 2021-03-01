import styled from 'styled-components'

import { quadruplePx } from '../theme/space'
import { media } from '../theme/media'

export const LayoutContainer = styled.main`
  width: 100%;
  /* position: relative; */
  overflow-x: hidden;
  padding-bottom: env(safe-area-inset-bottom);
  display: flex;
  flex-flow: column;
  align-items: center;
  padding-bottom: ${quadruplePx()};
`

export const LayoutChildrenContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;

  ${media.greaterThan('md')`
    width: 90%;
  `}

  ${media.greaterThan('lg')`
    padding-bottom: 0;
  `}
`
