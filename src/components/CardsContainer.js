import styled from 'styled-components';

import { Flex } from './Commons';
import Card from './Card';

import CreateImg from '../assets/create.png';
import ContentImg from '../assets/add-content.png';
import LaunchImg from '../assets/launch.png';

const ContainerStyled = styled(Flex)`
  width: 1050px;

  @media (max-width:${props => props.theme.breakpoints.large}) {
    width: 900px;
  };

  @media (max-width:${props => props.theme.breakpoints.medium}) {
    flex-direction: column;
    align-items: center;
  };
`;


const CardsContainer = () => {
  return(
    <ContainerStyled 
    justifyContent="space-between"
    alignItems="flex-start">
      <Card 
        image={CreateImg}
        imgMessage="Drawing of a screen and hammer."
        title="Create your site"
        text="Create an account to get started."
      />
      <Card 
        image={ContentImg}
        imgMessage="Drawing of a screen and tools."
        title="Add Contents"
        text="Add contents and pages to your site."
      />
      <Card 
        image={LaunchImg}
        imgMessage="Drawing of a computer with the page ready."
        title="Publish"
        text="Now publish yo make your site live!"
      />
    </ContainerStyled>
  );
};

export default CardsContainer;