import GlobalStyle from './assets/styles/GlobalStyle';
import './assets/styles/fonts.css';
import Header from './components/Header';
import ThemeProvider from './providers/ThemeProvider';
import CountriesProvider from './providers/CountriesProvider';

function App() {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <Header></Header>
        <CountriesProvider>
        </CountriesProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
