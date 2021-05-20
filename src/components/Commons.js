import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  flexDirection: ${props => props.flexDirection};
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
