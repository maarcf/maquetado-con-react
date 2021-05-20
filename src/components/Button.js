import styled from 'styled-components';

const ButtonStyled = styled.button`
  color: ${props => props.theme.colors.textSecondary};
  font-size: ${props => props.size || props.theme.sizes.mobileP};
  padding: ${props => props.theme.spaces.extraSmall} ${props => props.theme.spaces.small};  
  background-color: ${props => props.bgColor || props.theme.colors.bgPrimary};
  border-radius: 6px;
  border: none;  
`;


const Button = ({ text }) => {
  return(
    <ButtonStyled>
      { text }
    </ButtonStyled>
  )

};

export default Button;