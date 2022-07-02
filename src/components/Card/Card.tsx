import React, { ReactNode } from 'react'

import {
  CardBody,
  CardContainer,
  CardImage,
  CardImageContainer
} from './Card.styled'

type CardProps = {
  image: string
  cardBody: ReactNode
  clickable?: boolean
  onClick?: () => void
}

const Card = ({
  image,
  cardBody,
  clickable,
  onClick
}: CardProps): JSX.Element => (
  <CardContainer onClick={onClick} clickable={clickable}>
    <CardImageContainer>
      <CardImage src={image} loading="lazy" />
    </CardImageContainer>
    <CardBody>{cardBody}</CardBody>
  </CardContainer>
)

export default Card
