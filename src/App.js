import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from './styles/theme';
import NavBar from './components/NavBar';

import './App.css';


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${props => props.theme.font.family};
    color: ${props => props.theme.colors.textPrimary};
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;



const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavBar />
    </ThemeProvider>    
  );
}

export default App;
