import styled from 'styled-components'

export const Social = styled.div`
  margin-top: 20px;
`

export const StyledIcon = styled.i`
  width: 25px;
  height: 25px;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.7;
    transform: scale(1.1);
  }
`

export const Link = styled.a`
  color: ${({ theme }): string => theme.colors.main};
  margin-right: 8px;
`
