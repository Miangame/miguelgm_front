import styled, { CSSProperties } from 'styled-components'

type CardContainerProps = {
  clickable?: boolean
}

export const CardContainer = styled.div<CardContainerProps>`
  width: 100%;
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
  display: flex;
  flex-direction: column;
  cursor: ${({ clickable }: CardContainerProps & CSSProperties): string =>
    clickable ? 'pointer' : 'unset'};
`

export const CardImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const CardImage = styled.img`
  width: 100%;
`

export const CardBody = styled.div`
  padding: 15px 25px;
  height: 100%;
`
