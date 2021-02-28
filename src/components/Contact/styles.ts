import styled from 'styled-components'

export const ContainerContact = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-top: 15%;
`

export const Name = styled.p`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0px;
`

export const Description = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.main};
`

export const Social = styled.div`
  margin-top: 20px;
  a {
    color: ${({ theme }) => theme.colors.main};
    margin: 8px;
    transition: all 0.5s ease;
  }

  a:hover {
    opacity: 0.7;
  }
`
