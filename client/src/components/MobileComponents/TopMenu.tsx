import * as React from 'react';
import styled from 'styled-components'
import { Context } from "../../context/Context";
import Hamburger from '../../icons/Hamburger';
import User from '../../icons/User';
import * as themeConf from "../../styles/theme"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0px;
  background-color: rgb(51,51,51);
`
const Label = styled.p`
  color: springgreen;
  font-family: Quicksand;
  letter-spacing: 1rem;
`

const Item = styled.button`
  all: unset;
  &:active;
  &:hover {
    background-color: springgreen;
  }
`;

const TopMenu: React.FC = () => {
    const context = React.useContext(Context);
  return (
    <Container>

      <Item onClick={(event) => context.handleClick(event)} >
        <Hamburger dropShadow={false} scaleFactor={0.55} color={context.color}/>
      </Item>

      <Label>
        <h2>NEXUS</h2>
      </Label>

      <Item onClick={(event) => context.handleClick(event)}>
        <User dropShadow={false} scaleFactor={0.55} color={context.color}/>
      </Item>

      </Container>

     
  )
}

export default TopMenu