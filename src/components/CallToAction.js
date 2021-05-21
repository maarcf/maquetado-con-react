import styled from 'styled-components';

import { Flex, ButtonStyled } from './Commons';

const CtaStyled = styled(Flex)`
  color: ${props => props.theme.colors.textSecondary};
  background-color: ${props => props.theme.colors.bgPrimary};
  padding: ${props => props.theme.spaces.large};
  border-bottom: 1px solid ${props => props.theme.colors.textSecondary};
`;

const Title = styled.h2`
  font-size: ${props => props.theme.sizes.h2};
  margin-bottom: ${props => props.theme.spaces.medium};
  text-align: center;

  @media (max-width:${props => props.theme.breakpoints.medium}) {
    font-size: ${props => props.theme.sizes.mobileH2};
  };
`;

const CtaButton = styled(ButtonStyled)`
  color: ${props => props.theme.colors.bgPrimary};
  background-color: ${props => props.theme.colors.textSecondary};
  padding: ${props => props.theme.spaces.small}
  ${props => props.theme.spaces.medium};
`;

const CallToAction = () => {
  return(
    <CtaStyled as="section"
    flexDirection="column"
    justifyContent="center">
      <Title>
        Fasten your website creation process with Landify UI Kit
      </Title>

      <CtaButton>
        Download Now
      </CtaButton>
    </CtaStyled>
  );
};

export default CallToAction;