import React, { ReactNode } from 'react'

import { CardBody, CardContainer, CardImageContainer } from './styles'

type CardProps = {
  image: string
  cardBody: ReactNode
  onClick?: () => void
}

const Card = ({ image, cardBody, onClick }: CardProps) => (
  <CardContainer onClick={onClick}>
    <CardImageContainer>
      <img src={image} />
    </CardImageContainer>
    <CardBody>{cardBody}</CardBody>
  </CardContainer>
)

export default Card
