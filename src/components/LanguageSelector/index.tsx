import React, { useState } from 'react'
import { useRouter } from 'next/router'

import { LOCALES_AVAILABLES } from '../../constants/locales'

import {
  LocaleSelectorItem,
  LocaleFlag,
  LocaleSelectorContainer,
  LocaleSelectorList
} from './styles'

const LanguageSelector = (): JSX.Element => {
  const { pathname, asPath, locale, push, query } = useRouter()
  const [selectorOpened, toggleSelector] = useState<boolean>(false)

  const sortedLocales: string[] = LOCALES_AVAILABLES.sort((a, b) => {
    if (a === locale) return -1
    else if (b === locale) return 1
    else return a.localeCompare(b)
  })

  const handleLocaleClick = (e: MouseEvent, lng: string): void => {
    e.preventDefault()
    push({ pathname, query }, asPath, { locale: lng })
    toggleSelector(false)
  }

  return (
    <LocaleSelectorContainer
      onMouseLeave={(): number =>
        setTimeout((): void => toggleSelector(false), 100)
      }
    >
      <LocaleFlag
        locale={locale}
        as="div"
        onClick={(): void => toggleSelector(!selectorOpened)}
      />
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

export default LanguageSelector
