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

  const [country, setCountry] = useState('');
  const handleSearchChange = (e) => {
    setCountry(e.target.value)
  }

  return (
    <CountriesContext.Provider value={{ countries, isLoading, country, handleSearchChange }}>
      {children}
    </CountriesContext.Provider>
  )
}

export default CountriesProvider;