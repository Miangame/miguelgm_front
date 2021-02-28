// import original module declaration
import 'styled-components'

// and extend it
declare module 'styled-components' {
  export interface DefaultTheme {
    body: string
    text: string

    colors: {
      main: string
      black: string
      menuButtonClosed: string
      menuButtonOpened: string
      navigation: string
    }
  }
}
