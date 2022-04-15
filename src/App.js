import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './assets/styles/GlobalStyle';
import './assets/styles/fonts.css';
import Header from './components/Header';
import ThemeProvider from './providers/ThemeProvider';
import CountriesProvider from './providers/CountriesProvider';
import Countries from './pages/Countries';
import CountryDetail from './pages/CountryDetail';

function App() {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <Header />
        <CountriesProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Countries />} />
              <Route path='/country/:id' element={<CountryDetail />} />
            </Routes>
          </BrowserRouter>
        </CountriesProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
