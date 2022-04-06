import React, { useState } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';
import { lightTheme, darkTheme } from "../assets/styles/Theme";

const ThemeProvider = ({ children }) => {
  const [appTheme, setAppTheme] = useState(lightTheme);

  return (
    <StyledProvider theme={appTheme}>
      {children}
    </StyledProvider>
  )
}

export default ThemeProvider;