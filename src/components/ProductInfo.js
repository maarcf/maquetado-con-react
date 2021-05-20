import styled from 'styled-components';

import { Flex } from './Commons';
import CardsContainer from './CardsContainer';

const InfoSection = styled(Flex)`
  padding: ${props => props.theme.spaces.large};
  
  @media (max-width:${props => props.theme.breakpoints.medium}) {
    padding: ${props => props.theme.spaces.medium} ${props => props.theme.spaces.small};
  };
`;

const Title = styled.h2`
  font-size: ${props => props.theme.sizes.h2};
  margin-bottom: ${props => props.theme.spaces.medium};

  @media (max-width:${props => props.theme.breakpoints.medium}) {
    font-size: ${props => props.theme.sizes.mobileH2};
  };
`;


const ProductInfo = () => {
  return(
    <InfoSection as="section"
    flexDirection="column">
      <Title>How it works</Title>
      <CardsContainer />
    </InfoSection>
  )

}

export default ProductInfo;