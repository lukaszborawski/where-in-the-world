import React, { useState, useContext, useEffect, useRef } from 'react'
import { CountriesContext } from '../providers/CountriesProvider'
import styled from 'styled-components'
import arrowDownIcon from '../assets/icons/arrow-down.svg'


const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'Polar'];

const CustomDropdown = () => {

  const { region, setRegion } = useContext(CountriesContext);
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef()

  const handleOutsideClick = (e) => {
    if (buttonRef.current && !buttonRef.current.contains(e.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick)

    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [])

  return (
    <DropdownContainer>
      <DropdownHeader ref={buttonRef} onClick={() => setIsOpen(!isOpen)}>
        <RegionName>{region || 'Filter by region'}</RegionName>
        <Icon />
      </DropdownHeader>
      {isOpen && (
        <DropdownListContainer>
          <DropdownList>
            {regions.map(region => (
              <ListItem
                onClick={() => {
                  setRegion(region)
                  setIsOpen(false)
                }}
                key={region}>
                {region}
              </ListItem>
            ))}
            <ListItem onClick={() => {
              setRegion("")
              setIsOpen(false)
            }}>
              All
            </ListItem>
          </DropdownList>
        </DropdownListContainer>
      )}
    </DropdownContainer>
  )
}

export default CustomDropdown;


const DropdownContainer = styled.div`
  margin-top: 20px;
  width: 250px;
  ${({ theme }) => theme.lg} {
    margin-top: 0;
  }
`;
const DropdownHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 15px;
  box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  background-color: ${({ theme }) => theme.element};
  cursor: pointer;
`;

const RegionName = styled.span`

`;

const Icon = styled.div`
  width: 25px;
  height: 25px;
  background: url(${arrowDownIcon}) no-repeat center;
  filter: ${({ theme }) => (theme.isDark ? 'invert(1)' : 'invert(0)')};
`;

const DropdownListContainer = styled.div`
  width: 300px;
  margin-top: 10px;
  position: absolute;
  box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.8);
`;
const DropdownList = styled.ul`
  border-radius: 8px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.element};
  padding: 15px 0 15px 15px;
`;

const ListItem = styled.li`
  list-style: none;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.input};
  }
`;