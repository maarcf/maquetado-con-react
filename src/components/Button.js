
import { ButtonStyled } from './Commons';

const Button = ({ text, size, textColor, bgColor }) => {
  return(
    <ButtonStyled size={size}
      textColor={textColor}
      bgColor={bgColor}>
      { text }
    </ButtonStyled>
  )

};

export default Button;