import styled from 'styled-components';

import { Flex, ImageContainer, ImageStyled } from './Commons';

const CardStyled = styled(Flex)`
  width: 300px;

  @media (max-width:${props => props.theme.breakpoints.large}) {
    width: 250px;
  };

  @media (max-width:${props => props.theme.breakpoints.medium}) {
    width: 350px;
    margin: ${props => props.theme.spaces.medium} 0;
  };

  @media (max-width:${props => props.theme.breakpoints.extraSmall}) {
    width: 220px;
  };
`;

const CardTitle = styled.h3`
  font-size: ${props => props.theme.sizes.h3};
  margin: ${props => props.theme.spaces.small} 0;
`;

const TextInfo = styled.p`
  font-size: ${props => props.theme.sizes.p};
  text-align: center;

  @media (max-width:${props => props.theme.breakpoints.large}) {
    font-size: ${props => props.theme.sizes.mobileP};
  };
`;


const Card = ({ image, imgMessage, title, text }) => {
  return(
    <CardStyled as="article"
    flexDirection="column"
    justifyContent="center" 
    >

      <ImageContainer width="200px">
        <ImageStyled src={image} alt={imgMessage} />
      </ImageContainer>

      <CardTitle>{title}</CardTitle>

      <TextInfo>{text}</TextInfo>

    </CardStyled>
  );
};

export default Card;