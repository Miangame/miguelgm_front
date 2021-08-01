import React, { useState } from 'react'
import { useRouter } from 'next/router'

import { LOCALES_AVAILABLES } from '../../constants/locales'

import {
  LocaleSelectorItem,
  LocaleFlag,
  LocaleSelectorContainer,
  LocaleSelectorList
} from './styles'

const LanguageSelector = () => {
  const { pathname, locale, push } = useRouter()
  const [selectorOpened, toggleSelector] = useState(false)

  return (
    <LocaleSelectorContainer
      onMouseLeave={() => setTimeout(() => toggleSelector(false), 100)}
    >
      <LocaleFlag
        locale={locale}
        as="div"
        onClick={() => toggleSelector(!selectorOpened)}
      />
      {selectorOpened && (
        <LocaleSelectorList>
          {LOCALES_AVAILABLES.sort((a, b) => {
            if (a === locale) return -1
            else if (b === locale) return 1
            else return a.localeCompare(b)
          }).map((__lng) => (
            <LocaleSelectorItem
              key={__lng}
              locale={__lng}
              as="div"
              onClick={(e) => {
                e.preventDefault()
                push(pathname, pathname, { locale: __lng })
                toggleSelector(false)
              }}
            />
          ))}
        </LocaleSelectorList>
      )}
    </LocaleSelectorContainer>
  )
}

export default LanguageSelector
