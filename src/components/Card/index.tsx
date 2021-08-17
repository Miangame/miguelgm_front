import React, { ReactNode } from 'react'

import { CardBody, CardContainer, CardImageContainer } from './styles'

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
  <CardContainer onClick={onClick} $clickable={clickable}>
    <CardImageContainer>
      <img src={image} loading="lazy" />
    </CardImageContainer>
    <CardBody>{cardBody}</CardBody>
  </CardContainer>
)

export default Card
