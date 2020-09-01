import styled from 'styled-components'

import { doublePx } from '../../theme/space'

export const CardPresentation = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  background: #fff;
  border-radius: 2px;
  width: 90%;
  padding: 15px 25px;
  margin-bottom: ${doublePx()};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`

export const CardPresentationImage = styled.div`
  margin-right: 15px;

  img {
    width: 90px;
  }
`

export const CardPresentationDetails = styled.div`
  a {
    margin-right: 8px;
  }
`
