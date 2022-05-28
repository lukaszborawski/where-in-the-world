import React, { useContext } from 'react'
import { CountriesContext } from '../providers/CountriesProvider'
import styled from 'styled-components'
import Card from '../components/CountryCard';
import Loader from '../components/Loader';
import { motion } from 'framer-motion';
import SearchBar from '../components/SearchBar';

const Countries = () => {

  const { countries, isLoading } = useContext(CountriesContext);

  return (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <FiltersWrapper>
        {/* <Filters /> */}
        <SearchBar />
      </FiltersWrapper>
      <CountriesWrapper>
        {!isLoading ?
          countries.map(
            ({ name, flag, population, region, capital, alpha3Code }) => (
              <Card
                key={name}
                flag={flag}
                name={name}
                population={population}
                region={region}
                capital={capital}
                alpha3Code={alpha3Code}
              />
            )
          )
          : <Loader />
        }
      </CountriesWrapper>
    </Wrapper>
  )
}

export default Countries;

const Wrapper = styled(motion.main)`
  padding: 80px 20px 0 20px;
  margin: 0 auto;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background};
`;

const FiltersWrapper = styled.div`
  margin: 30px 0;
`;

const CountriesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
`;