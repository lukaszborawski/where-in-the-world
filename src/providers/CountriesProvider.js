import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'

export const CountriesContext = createContext();

const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://restcountries.com/v2/all')
      .then(response => {
        setCountries(response.data)
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <CountriesContext.Provider value={{ countries, isLoading }}>
      {children}
    </CountriesContext.Provider>
  )
}

export default CountriesProvider;