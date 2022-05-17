import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './assets/styles/GlobalStyle';
import './assets/styles/fonts.css';
import Header from './components/Header';
import ThemeProvider from './providers/ThemeProvider';
import CountriesProvider from './providers/CountriesProvider';
import AnimatedRoutes from './components/AnimatedRoutes';


function App() {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <Header />
        <CountriesProvider>
          <BrowserRouter>
            <AnimatedRoutes />
          </BrowserRouter>
        </CountriesProvider>
      </ThemeProvider>
    </>
  );
}

export default App;