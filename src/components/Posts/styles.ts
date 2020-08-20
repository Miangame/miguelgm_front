import styled from 'styled-components'

import { doublePx, singlePx } from '../../theme/space'
import { colors } from '../../theme/color'

export const Card = styled.div`
  background: #fff;
  border-radius: 2px;
  width: 70%;
  padding: 15px 25px;
  margin-bottom: ${doublePx()};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
`

export const CardAuthor = styled.p`
  margin-top: 0;
  font-size: 14px;

  span {
    color: ${colors.secondary};
  }
`

export const CardTitle = styled.p`
  font-size: 24px;
  font-weight: 700;
`

export const CardTags = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
`

export const CardTag = styled.p`
  color: ${colors.grey};
  margin-right: 10px;
  margin-top: 0;
`

export const CardReactions = styled.div`
  margin-top: ${singlePx()};
  display: flex;
  flex-flow: row;
  align-items: center;

  span {
    margin-left: 5px;
    margin-right: 15px;
    font-size: 14px;
    color: ${colors.grey};
  }
`
