import { DefaultTheme } from 'styled-components'

import { colors } from './color'

export const lightTheme: DefaultTheme = {
  body: colors.white,
  text: colors.black,
  colors: {
    main: colors.primary,
    black: colors.black,
    menuButtonClosed: colors.menuButtonClosed,
    menuButtonOpened: colors.menuButtonOpened,
    navigation: colors.white
  }
}

export const darkTheme: DefaultTheme = {
  body: colors.darkBody,
  text: colors.darkText,
  colors: {
    main: colors.primaryDark,
    black: colors.black,
    menuButtonClosed: colors.menuButtonOpened,
    menuButtonOpened: colors.menuButtonClosed,
    navigation: colors.black
  }
}
