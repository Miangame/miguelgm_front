import React from 'react'
import { IoMdMoon, IoMdSunny } from 'react-icons/io'
import useDarkMode from 'use-dark-mode'

import { colors } from '../../theme/color'

import { ThemeSwitcherButton } from './ThemeSwitcher.styled'

const ThemeSwitcher = (): JSX.Element => {
  const darkMode = useDarkMode(false)
  return (
    <ThemeSwitcherButton onClick={darkMode.toggle}>
      <div className={`moon-logo ${darkMode.value ? 'animate-show-moon' : ''}`}>
        <IoMdMoon color={colors.themeSwitcherIcon} />
      </div>

      <div className={`sun-logo ${darkMode.value ? 'animate-hide-sun' : ''}`}>
        <IoMdSunny color={colors.themeSwitcherIcon} />
      </div>
    </ThemeSwitcherButton>
  )
}
export default ThemeSwitcher
