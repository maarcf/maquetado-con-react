import styled from 'styled-components';

import { ImageContainer, ImageStyled } from './Commons';

const IconContainer = styled(ImageContainer)`
  margin: 0 ${props => props.theme.spaces.extraSmall};
`;

const SocialLink = ({ socialUrl, imgIcon, socialName }) => {
  return(
    <a href={socialUrl} target="_blanl">
      <IconContainer>
        <ImageStyled src={imgIcon} alt={socialName} />
      </IconContainer>
    </a>
  );
};

export default SocialLink;