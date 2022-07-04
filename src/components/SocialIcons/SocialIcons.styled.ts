import styled from 'styled-components'

export const Social = styled.div`
  margin-top: 20px;
`

export const Link = styled.a`
  color: ${({ theme }): string => theme.colors.main};
  margin-right: 8px;
  transition: all 0.5s ease;

  &:hover {
    opacity: 0.7;
  }
`
