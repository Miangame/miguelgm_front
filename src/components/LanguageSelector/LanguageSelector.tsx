import React, { memo, MouseEvent, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'

import { LOCALES_AVAILABLES } from '../../constants/locales'

import {
  LocaleSelectorItem,
  LocaleFlag,
  LocaleSelectorContainer,
  LocaleSelectorList
} from './LanguageSelector.styled'

// TODO: refactor this component
const LanguageSelector = (): JSX.Element => {
  const { pathname, asPath, locale, push, query } = useRouter()
  const [selectorOpened, setSelectorOpened] = useState<boolean>(false)
  const timeout = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    return () => {
      clearTimeout(timeout.current)
    }
  }, [])

  const sortedLocales: string[] = LOCALES_AVAILABLES.sort((a, b) => {
    if (a === locale) return -1
    else if (b === locale) return 1
    else return a.localeCompare(b)
  })

  const handleLocaleClick = (e: MouseEvent, lng: string): void => {
    e.preventDefault()
    push({ pathname, query }, asPath, { locale: lng })
    setSelectorOpened(false)
  }

  const handleMouseLeave = (): void => {
    timeout.current = setTimeout((): void => setSelectorOpened(false), 100)
  }

  const handleOpenSelector = (): void => {
    setSelectorOpened(!selectorOpened)
  }

  return (
    <LocaleSelectorContainer onMouseLeave={handleMouseLeave}>
      <LocaleFlag locale={locale} as="div" onClick={handleOpenSelector} />
      {selectorOpened && (
        <LocaleSelectorList>
          {sortedLocales.map((__lng) => (
            <LocaleSelectorItem
              key={__lng}
              locale={__lng}
              as="div"
              onClick={(e): void => handleLocaleClick(e, __lng)}
            />
          ))}
        </LocaleSelectorList>
      )}
    </LocaleSelectorContainer>
  )
}

export default memo(LanguageSelector)
