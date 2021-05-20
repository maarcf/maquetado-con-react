import styled from 'styled-components';

import { Flex, ImageContainer, ImageStyled } from './Commons';
import Button from './Button';

import DecoImage from '../assets/web-image.png';

const MainStyled = styled(Flex)`  
  padding: ${props => props.theme.spaces.large};
  box-shadow: ${props => props.theme.boxShadow};

  @media (max-width:${props => props.theme.breakpoints.medium}) {
    padding: ${props => props.theme.spaces.small} 
    ${props => props.theme.spaces.small}
    ${props => props.theme.spaces.medium};
    flex-direction: column;
  };
`;

const InfoContainer = styled(Flex)`
  width: 500px;

  @media (max-width:${props => props.theme.breakpoints.medium}) {
    width: 350px;
    margin-bottom: ${props => props.theme.spaces.medium}
  };
`;

const Title = styled.h1`
  font-size: ${props => props.theme.sizes.h1};
  line-height: 1.5;

  @media (max-width:${props => props.theme.breakpoints.medium}) {
    font-size: ${props => props.theme.sizes.mobileH1};
  };
`;

const TextInfo = styled.p`
  font-size: ${props => props.theme.sizes.p};
  line-height: 1.5;
  margin: ${props => props.theme.spaces.medium} 0;

  @media (max-width:${props => props.theme.breakpoints.medium}) {
    font-size: ${props => props.theme.sizes.mobileP};
  };
`;

const ImgContainer = styled(ImageContainer)`
  border-radius: 50%;
  width: 450px;
  height: 450px;
  background-color: #D6B1FF;
  position: relative;

  @media (max-width:1100px) {
    width: 350px;
    height: 350px;
  };
  
  @media (max-width:${props => props.theme.breakpoints.medium}) {
    width: 600px;
    height: 580px;
    margin-bottom: ${props => props.theme.spaces.medium};
  };
`;

const ImgStyled = styled(ImageStyled)`
  position: relative;
  top: 40px;
  right: -75px;

  @media (max-width:${props => props.theme.breakpoints.medium}) {
    right: -130px;
  };
`;




const MainSection = () => {
  return(
    <MainStyled as="main"
    justifyContent="space-between">

      <InfoContainer
      flexDirection="column"
      alignItems="flex-start">
        <Title>Landing page UI kit</Title>
        <TextInfo>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis temporibus in ea quisquam sequi pariatur porro perspiciatis totam.</TextInfo>
        <Button text="Button" />
      </InfoContainer>

      
      <ImgContainer>
        <ImgStyled src={DecoImage} alt="App Dashboard" />
      </ImgContainer>

    </MainStyled>
  )
};

export default MainSection;