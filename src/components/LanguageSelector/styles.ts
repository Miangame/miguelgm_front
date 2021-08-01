import styled from 'styled-components'

import { doubleAndHalfPx, halfPx, singleAndHalfPx } from '../../theme/space'

type LocaleFlagProps = {
  locale: string
}

export const LocaleSelectorContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  z-index: 1;
`

export const LocaleSelectorList = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: -${halfPx()};
  width: ${doubleAndHalfPx()};
  background-color: transparent;
  align-items: center;
  padding-top: ${halfPx()};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
`

export const LocaleFlag = styled.a<LocaleFlagProps>`
  display: block;
  width: ${singleAndHalfPx()};
  height: ${singleAndHalfPx()};
  background-image: url('/img/locales/locale-${(props) => props.locale}.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`

export const LocaleSelectorItem = styled(LocaleFlag)`
  margin-bottom: ${halfPx()};
`
