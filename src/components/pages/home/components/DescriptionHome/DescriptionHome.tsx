import React, { memo } from 'react'
import { useTranslation } from 'next-i18next'

import SocialIcons from '../../../../SocialIcons/SocialIcons'

import {
  DescriptionHomeContainer,
  HiHome,
  NameHome,
  ParagraphDescription,
  SubtitleHomeDescription
} from './DescriptionHome.styled'

const DescriptionHome = (): JSX.Element => {
  const { t } = useTranslation(['common', 'home'])

  return (
    <DescriptionHomeContainer>
      <HiHome>
        {t('home:hi')} <span>👋🏽</span>
      </HiHome>
      <NameHome>{t('home:who_am_i')}</NameHome>
      <SubtitleHomeDescription>{t('profession')}</SubtitleHomeDescription>
      <SocialIcons />
      <section>
        <ParagraphDescription
          dangerouslySetInnerHTML={{
            __html: t('home:description.presentation', {
              interpolation: { escapeValue: false }
            })
          }}
        />
        <ParagraphDescription
          dangerouslySetInnerHTML={{
            __html: t('home:description.description', {
              interpolation: { escapeValue: false }
            })
          }}
        />
        <ParagraphDescription
          dangerouslySetInnerHTML={{
            __html: t('home:description.other', {
              interpolation: { escapeValue: false }
            })
          }}
        />
      </section>
    </DescriptionHomeContainer>
  )
}

export default memo(DescriptionHome)
