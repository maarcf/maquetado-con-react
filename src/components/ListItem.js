import styled from 'styled-components';

const ListItemStyled = styled.li`
  margin: 0 ${props => props.theme.spaces.small};
  font-size: 14px;
`;


const ListItem = ({ text }) => {
  return(
    <ListItemStyled>
      { text }
    </ListItemStyled>
  )

};

export default ListItem;