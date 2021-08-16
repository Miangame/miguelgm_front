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
    url(/fonts/montserrat/Montserrat-ExtraBold.ttf);
    font-style: medium;
    font-weight: 800;
    font-display: swap;
  }

  body, input, textarea, select, button {
    font-family: 'charter', sans-serif;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    line-height: 1.4em;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'montserrat', sans-serif;
  }

  a {
    color: ${({ theme }) => theme.colors.main};
  }

  .moon-logo {
    opacity: 0;
    transform: translateY(20%) rotateZ(50deg);
    transition: all 1s ease-out;
  }

  .sun-logo {
    opacity: 1;
    transform: translateY(0) rotateZ(0deg);
    transition: all 1s ease-out;
  }

  .animate-hide-sun {
    opacity: 0;
    transform: translateY(20%) rotateZ(100deg);
  }

  .animate-show-moon {
    opacity: 1;
    transform: translateY(0%) rotateZ(0deg);
  }
`
