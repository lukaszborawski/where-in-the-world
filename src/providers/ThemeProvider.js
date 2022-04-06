import React, { useState, createContext } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';
import { lightTheme, darkTheme } from "../assets/styles/Theme";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [appTheme, setAppTheme] = useState(lightTheme);

  const toggleTheme = () => {
    appTheme === lightTheme ? setAppTheme(darkTheme) : setAppTheme(lightTheme);
  }

  return (
    <StyledProvider theme={appTheme}>
      <ThemeContext.Provider value={{ toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </StyledProvider>
  )
}

export default ThemeProvider;