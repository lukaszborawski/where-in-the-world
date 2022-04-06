import GlobalStyle from './assets/styles/GlobalStyle';
import './assets/styles/fonts.css';
import Header from './components/Header';
import ThemeProvider from './providers/ThemeProvider';

function App() {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <Header></Header>
      </ThemeProvider>
    </>
  );
}

export default App;
