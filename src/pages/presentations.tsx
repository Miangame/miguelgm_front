import React from 'react'
import Image from 'next/image'
import { GetStaticProps } from 'next'

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
          <Image
            src={`/${presentation.image}`}
            alt={presentation.title}
            width={200}
            height={200}
          />
        </CardPresentationImage>
        <CardPresentationDetails>
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
        </CardPresentationDetails>
      </CardPresentation>
    ))}
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  }
}

export default Presentations
