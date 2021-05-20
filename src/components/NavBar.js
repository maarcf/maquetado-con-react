import styled from 'styled-components';

import Button from './Button';
import List from './List';
import BurgerMenu from './BurgerMenu';
import { Flex, ImageContainer, ImageStyled } from './Commons';

import Logo from '../assets/logo.png';

const Nav = styled(Flex)`
  height: 80px;
  padding: ${props => props.theme.spaces.small} ${props => props.theme.spaces.large};
  box-shadow: 0px 1px 0px #E5E9F2;

  @media (max-width:${props => props.theme.breakpoints.small}) {
    padding: ${props => props.theme.spaces.small};
  };
`;

const NavBar = () => {
  return(
    <Nav as="nav"
    justifyContent="space-between"
    alignItems="center">

      <ImageContainer width="120px">
        <ImageStyled src={Logo} alt="Logo" />
      </ImageContainer>

      <Flex>
        <List />
        <Button text="Buy now" />
        <BurgerMenu />
      </Flex>
      
    </Nav>
  )
}

export default NavBar;