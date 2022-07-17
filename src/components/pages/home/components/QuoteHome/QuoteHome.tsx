import React, { memo } from 'react'
import { useTranslation } from 'next-i18next'

import { Quote, QuoteHomeContainer } from './QuoteHome.styled'

const QuoteHome = (): JSX.Element => {
  const { t } = useTranslation(['common', 'home'])

  return (
    <QuoteHomeContainer>
      <Quote>
        {t('home:quote')}
        <span>Confucius</span>
      </Quote>
    </QuoteHomeContainer>
  )
}

export default memo(QuoteHome)
