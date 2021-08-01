import React from 'react'
import ReactSwitch from 'react-switch'
import { IoMdSunny, IoMdMoon } from 'react-icons/io'
import useDarkMode from 'use-dark-mode'

const getStyles = (darkMode: boolean) => ({
  switch: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',

    paddingLeft: darkMode ? 10 : 10
  }
})

const ToggleTheme = () => {
  const darkMode = useDarkMode(false)
  const styles = getStyles(darkMode.value)

  return (
    <ReactSwitch
      checked={darkMode.value}
      offColor="#101114"
      onColor="#101114"
      checkedIcon={
        <IoMdSunny style={styles.switch} color="yellow" className="light" />
      }
      uncheckedIcon={
        <IoMdMoon style={styles.switch} color="yellow" className="dark" />
      }
      onChange={darkMode.toggle}
    />
  )
}

export default ToggleTheme
