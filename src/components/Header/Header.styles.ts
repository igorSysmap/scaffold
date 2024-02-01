import styled from "styled-components";

const fontSize = 20

export const HeaderWrapper = styled.div `
  background-color: blue;
`

export const NavBar = styled.div`
  display: flex;
  gap: 16px;
  font-size: ${fontSize}px;

  &:hover {
    background-color: yellow
  }

  a:hover {
    background-color: red;
  }
`