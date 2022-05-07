import React, { useContext } from 'react'
import { CountriesContext } from '../providers/CountriesProvider'
import styled from 'styled-components'
import Card from '../components/CountryCard';

const Countries = () => {

  const { countries } = useContext(CountriesContext);

  return (
    <Wrapper>
      {countries.map(
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
      )}
    </Wrapper>
  )
}

export default Countries;

const Wrapper = styled.main`
  padding: 120px 20px 0 20px;
  margin: 0 auto;
  max-width: 1440px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  background-color: ${({ theme }) => theme.background};
`;