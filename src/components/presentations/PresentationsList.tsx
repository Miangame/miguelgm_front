import React from 'react'

import { Presentation } from '../../interfaces/presentation'
import Card from '../Card'

import { PresentationBodyDetails, PresentationsListContainer } from './styles'

type PresentationsListProps = {
  presentations: Presentation[]
}

const getCardBody = (presentation: Presentation) => {
  return (
    <PresentationBodyDetails>
      <h2>{presentation.title}</h2>
      <p>{presentation.description}</p>
      {presentation.code && (
        <a href={presentation.code} target="_blank" rel="noreferrer">
          Código
        </a>
      )}
      <a href={presentation.schedule} target="_blank" rel="noreferrer">
        Programa
      </a>
    </PresentationBodyDetails>
  )
}

const PresentationsList = ({ presentations }: PresentationsListProps) => (
  <PresentationsListContainer>
    {presentations.map((presentation, index) => (
      <Card
        key={index}
        image={presentation.image}
        cardBody={getCardBody(presentation)}
      />
    ))}
  </PresentationsListContainer>
)

export default PresentationsList
