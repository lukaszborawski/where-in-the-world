import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'

export const CountriesContext = createContext();

const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');

  useEffect(() => {
    axios
      .get('https://restcountries.com/v2/all')
      .then(response => {
        setCountries(response.data)
      })
      .finally(() => setIsLoading(false));
  }, []);

  const handleSearchChange = (e) => {
    setCountry(e.target.value)
  }

  return (
    <CountriesContext.Provider value={{ countries, isLoading, country, region, setRegion, handleSearchChange }}>
      {children}
    </CountriesContext.Provider>
  )
}

export default CountriesProvider;