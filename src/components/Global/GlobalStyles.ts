import { createGlobalStyle } from 'styled-components'

import { colors } from '../../theme/color'

export const GlobalStyles = createGlobalStyle`
  body, input, textarea, select, button {
    font-family: Rubik, sans-serif;
  }

  a {
    color: ${colors.secondary};
  }
`
