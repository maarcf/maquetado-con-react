import styled from 'styled-components';

import { ImageContainer, ImageStyled } from './Commons';

import Burger from '../assets/menu-burger.png';

const BurgerContainer = styled(ImageContainer)`
  margin: 0 ${props => props.theme.spaces.small};
  display: none;

  @media (max-width:${props => props.theme.breakpoints.medium}) {
    display: flex;
  };  
`;

const BurgerMenu = () => {
  return(
    <BurgerContainer>
      <ImageStyled src={Burger} alt="Menu" />
    </BurgerContainer>
  )
}

export default BurgerMenu;