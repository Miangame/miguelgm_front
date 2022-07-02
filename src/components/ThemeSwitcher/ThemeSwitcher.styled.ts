import styled from 'styled-components'

export const ThemeSwitcherButton = styled.button`
  background-color: transparent;
  border: none;
  margin: 0.45rem;
  transition: transform 1s;
  width: 45px;
  height: 45px;
  cursor: pointer;
  position: relative;
  font-size: 1.6rem;

  &:hover {
    transform: scale(1.2);
  }

  & > div {
    position: absolute;
    top: 0;
    right: 0;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
