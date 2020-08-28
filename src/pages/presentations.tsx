import React from 'react'

import {
  CardPresentationImage,
  CardPresentationDetails,
  CardPresentation
} from '../components/presentations/styles'
import { presentations } from '../data/presentations'

const Presentations = () => (
  <>
    {presentations.map((presentation, index) => (
      <CardPresentation key={index}>
        <CardPresentationImage>
          <img src={presentation.image} />
        </CardPresentationImage>
        <CardPresentationDetails>
          <h2>{presentation.title}</h2>
          <p>{presentation.description}</p>
          {presentation.code && (
            <a href={presentation.code} target="_blank" rel="noreferrer">
              Código
            </a>
          )}
        </CardPresentationDetails>
      </CardPresentation>
    ))}
  </>
)

export default Presentations
