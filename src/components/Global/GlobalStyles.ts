import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-display: optional;
    font-family: 'charter';
    src: local('charter'),
      url(/fonts/charter/charter_regular-webfont.woff2) format('woff2');
    font-weight: 400;
    font-style: normal;
    unicode-range: U+000-5FF; /* Latin glyphs */
  }

  @font-face {
    font-display: optional;
    font-family: 'charter';
    src: local('charter'),
      url(/fonts/charter/charter_italic-webfont.woff2) format('woff2');
    font-weight: 400;
    font-style: italic;
    unicode-range: U+000-5FF; /* Latin glyphs */
  }

  @font-face {
    font-display: optional;
    font-family: 'charter';
    src: local('charter'),
      url(/fonts/charter/charter_bold-webfont.woff2) format('woff2');
    font-weight: 600;
    font-style: normal;
    unicode-range: U+000-5FF; /* Latin glyphs */
  }

  @font-face {
    font-display: optional;
    font-family: 'charter';
    src: local('charter'),
      url(/fonts/charter/charter_bold_italic-webfont.woff2) format('woff2');
    font-weight: 600;
    font-style: italic;
    unicode-range: U+000-5FF; /* Latin glyphs */
  }

  /* montserrat */

  @font-face {
    font-family: "montserrat";
    src: local('montserrat'),
    url(/fonts/montserrat/Montserrat-Black.ttf);
    font-style: medium;
    font-weight: 900;
    font-display: swap;
  }

  body, input, textarea, select, button {
    font-family: 'charter', sans-serif;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'montserrat', sans-serif;
  }

  a {
    color: ${({ theme }) => theme.colors.main};
  }
`
