import React, { memo } from 'react'
import { TFunction } from 'i18next'
import { useTranslation } from 'next-i18next'

import { Presentation } from '../../interfaces/presentation'
import Card from '../Card/Card'

import {
  PresentationBodyDetails,
  PresentationsListContainer
} from './PresentationsList.styled'

type PresentationsListProps = {
  presentations: Presentation[]
}

const getCardBody = (t: TFunction, presentation: Presentation): JSX.Element => {
  const { title, description, code, schedule } = presentation
  return (
    <PresentationBodyDetails>
      <h2>{t<string>(title)}</h2>
      <p>{t<string>(description)}</p>
      <p className="bottom">
        {code && (
          <a href={code} target="_blank" rel="noreferrer">
            {t<string>('code')}
          </a>
        )}
        <a href={schedule} target="_blank" rel="noreferrer">
          {t<string>('schedule')}
        </a>
      </p>
    </PresentationBodyDetails>
  )
}

const PresentationsList = ({
  presentations
}: PresentationsListProps): JSX.Element => {
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

export default memo(PresentationsList)
