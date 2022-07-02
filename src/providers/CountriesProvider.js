import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'

export const CountriesContext = createContext();

const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    async function getCountries() {
      try {
        const response = await axios.get('https://restcountries.com/v2/all')
        setCountries(response.data);
        setErrorMessage('');
      } catch (error) {
        setErrorMessage(error);
      } finally {
        setIsLoading(false);
      }
    }
    getCountries();
  }, []);

  const handleSearchChange = (e) => {
    setCountry(e.target.value)
  }
  const handleSearchClear = () => {
    setCountry("")
  }

  return (
    <CountriesContext.Provider value={{ countries, isLoading, country, region, errorMessage, setRegion, handleSearchChange, handleSearchClear }}>
      {children}
    </CountriesContext.Provider>
  )
}

export default CountriesProvider;