import styled from 'styled-components'

import { triplePx, doublePx } from '../theme/space'
import { media } from '../theme/media'

export const LayoutContainer = styled.main`
  width: 100%;
  /* position: relative; */
  overflow-x: hidden;
  padding-bottom: env(safe-area-inset-bottom);
  display: flex;
  flex-flow: column;
  align-items: center;
`

export const LayoutChildrenContainer = styled.div`
  height: 100%;
  /* position: relative; */
  padding-top: ${doublePx()};
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;

  ${media.greaterThan('md')`
    padding-top: ${triplePx()};
    width: 50%;
  `}

  ${media.greaterThan('lg')`
    padding-bottom: 0;
  `}
`
