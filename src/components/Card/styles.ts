import styled from 'styled-components'

type CardContainerProps = {
  $clickable?: boolean
}

export const CardContainer = styled.div`
  width: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: ${({ $clickable }: CardContainerProps) =>
    $clickable ? 'pointer' : 'unset'};
`

export const CardImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
  }
`

export const CardBody = styled.div`
  padding: 15px 25px;
`
