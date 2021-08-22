import styled from 'styled-components'

export const Social = styled.div`
  margin-top: 20px;
  a {
    color: ${({ theme }): string => theme.colors.main};
    margin: 8px;
    transition: all 0.5s ease;
  }

  a:hover {
    opacity: 0.7;
  }
`
