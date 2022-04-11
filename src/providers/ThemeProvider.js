import React, { useState, useEffect, createContext } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';
import { lightTheme, darkTheme } from "../assets/styles/Theme";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [appTheme, setAppTheme] = useState(lightTheme);

  const toggleTheme = () => {
    appTheme === lightTheme ? setLocalTheme(darkTheme) : setLocalTheme(lightTheme);
  };

  const setLocalTheme = (mode) => {
    localStorage.setItem('mode', JSON.stringify(mode));
    setAppTheme(mode);
  };

  useEffect(() => {
    const localTheme = JSON.parse(localStorage.getItem('mode'));
    if (localTheme) {
      setAppTheme(localTheme);
    }
  }, []);

  return (
    <StyledProvider theme={appTheme}>
      <ThemeContext.Provider value={{ toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </StyledProvider>
  )
}

export default ThemeProvider;