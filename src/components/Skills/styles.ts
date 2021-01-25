import styled from 'styled-components'

import { colors } from '../../theme/color'

export const BoxSkills = styled.section`
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 3px 21px 0 rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: relative;

  span {
    background: ${colors.skillsBackground};
    border-radius: 4px;
    display: inline-block;
    margin: 4px;
    padding: 4px 8px;
    font-size: 0.8rem;
    white-space: nowrap;
  }
`
