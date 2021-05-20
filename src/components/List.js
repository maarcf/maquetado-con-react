import styled from 'styled-components';

import ListItem from './ListItem';
import { Flex } from './Commons';

const ListStyled = styled(Flex)`
  @media (max-width:${props => props.theme.breakpoints.medium}) {
    display: none;
  }
  `;

const List = () => {
  return(
    <ListStyled as="ul"
    justifyContent="space-between"
    alignItems="center">
      <ListItem text="How it works" />
      <ListItem text="About Us" />
      <ListItem text="Partners" />
      <ListItem text="How it works" />
      <ListItem text="Support" />      
    </ListStyled>
  )
};

export default List;