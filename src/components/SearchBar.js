import React, { useContext } from 'react'
import { CountriesContext } from '../providers/CountriesProvider'
import styled from 'styled-components'
import searchIcon from '../assets/icons/search.svg';

const SearchBar = () => {

  const { handleSearchChange, country } = useContext(CountriesContext);

  return (
    <InputWrapper>
      <Icon />
      <Input type="text" value={country} onChange={handleSearchChange} placeholder='Search for a country...' />
    </InputWrapper>
  )
}

export default SearchBar;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.element};
  max-width: 600px;
  padding: 10px 20px;
  border-radius: 8px;
  width: 100%;
  box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.25);
  border: 2px solid;
  border-color: transparent;
`;

const Icon = styled.div`
  width: 25px;
  height: 25px;
  background: url(${searchIcon}) no-repeat center;
  filter: ${({ theme }) => (theme.isDark ? 'invert(1)' : 'invert(0.5)')};
`;

const Input = styled.input`
  width: 100%;
  line-height: 30px;
  margin-left: 20px;
  border-color: transparent;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.element};
  font-family: inherit;
`;

