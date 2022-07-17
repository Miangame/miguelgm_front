import React, { memo } from 'react'
import { useTranslation } from 'next-i18next'

import Experience from '../../../../ExperienceSection/ExperienceSection'
import Skills from '../../../../Skills/Skills'

import { AboutMeContainer, TitleHome } from './AboutMe.styled'

const AboutMe = (): JSX.Element => {
  const { t } = useTranslation(['common', 'home'])

  return (
    <AboutMeContainer>
      <div>
        <TitleHome>{t('home:experience')}</TitleHome>
        <a
          download="cv-miguel-gavilan-merino.pdf"
          target="_blank"
          href="../cv-miguel-gavilan-merino.pdf"
        >
          {t('home:download_cv')}
        </a>
        <Experience />
      </div>
      <div>
        <TitleHome>{t('home:skills')}</TitleHome>
        <Skills />
      </div>
    </AboutMeContainer>
  )
}

export default memo(AboutMe)
