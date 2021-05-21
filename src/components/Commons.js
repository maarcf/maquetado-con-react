import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems || "center"};  
`;

export const ImageContainer = styled.div`
  width: ${props => props.width || "auto"};  
`;

export const ImageStyled = styled.img`
  width: 100%;
  height: ${props => props.height || "auto"};
`;

export const ButtonStyled = styled.button`
  color: ${props => props.theme.colors.textSecondary};
  font-size: ${props => props.size || props.theme.sizes.mobileP};
  padding: ${props => props.theme.spaces.extraSmall} ${props => props.theme.spaces.small};  
  background-color: ${props => props.theme.colors.bgPrimary};
  border-radius: 6px;
  border: none; 
  cursor: pointer; 
`;