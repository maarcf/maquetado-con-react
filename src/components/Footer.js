import styled from 'styled-components';

<<<<<<< HEAD

const Footer = () => {
  return(
=======
import SocialLinksContainer from './SocialLinksContainer';
import { Flex, ImageContainer, ImageStyled } from './Commons';

import LogoLight from '../assets/logo-light.png';

const FooterStyled = styled(Flex)`
  color: ${props => props.theme.colors.footerText};
  padding: ${props => props.theme.spaces.small} ${props => props.theme.spaces.large};
  background-color: ${props => props.theme.colors.footerBg};

  @media (max-width:${props => props.theme.breakpoints.medium}) {
    flex-direction: column;    
  };
`;

const Text = styled.p`
  font-size: 14px;

  @media (max-width:${props => props.theme.breakpoints.medium}) {
    order: 2;
  };
`;

const LogoContainer = styled(ImageContainer)`
  order: 0;

  @media (max-width:${props => props.theme.breakpoints.medium}) {
    margin: ${props => props.theme.spaces.small} 0;
    order: 1;
  };
`;

const Footer = () => {
  return(
    <FooterStyled as="footer"
    justifyContent="space-between">
      <LogoContainer width="120px">
        <ImageStyled src={LogoLight} alt="Logo" />
      </LogoContainer>

      <Text>
      © 2020 Londify UI Kit. All rights reserved
      </Text>

      <SocialLinksContainer />
    </FooterStyled>
>>>>>>> continue
  );
};

export default Footer;