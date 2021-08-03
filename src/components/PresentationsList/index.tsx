import React from 'react'
import { TFunction } from 'i18next'
import { useTranslation } from 'next-i18next'

import { Presentation } from '../../interfaces/presentation'
import Card from '../Card'

import { PresentationBodyDetails, PresentationsListContainer } from './styles'

type PresentationsListProps = {
  presentations: Presentation[]
}

const getCardBody = (t: TFunction, presentation: Presentation) => {
  const { title, description, code, schedule } = presentation
  return (
    <PresentationBodyDetails>
      <h2>{t(title)}</h2>
      <p>{t(description)}</p>
      <p className="bottom">
        {code && (
          <a href={code} target="_blank" rel="noreferrer">
            {t('code')}
          </a>
        )}
        <a href={schedule} target="_blank" rel="noreferrer">
          {t('schedule')}
        </a>
      </p>
    </PresentationBodyDetails>
  )
}

const PresentationsList = ({ presentations }: PresentationsListProps) => {
  const { t } = useTranslation('presentations')
  return (
    <PresentationsListContainer>
      {presentations.map((presentation, index) => (
        <Card
          key={index}
          image={presentation.image}
          cardBody={getCardBody(t, presentation)}
        />
      ))}
    </PresentationsListContainer>
  )
}

export default PresentationsList
