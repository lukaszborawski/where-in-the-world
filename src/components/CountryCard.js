import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const CountryCard = ({ countryName, flag, population, region, capital }) => {
  return (
    <Link to={`country/${countryName}`}>
      <Wrapper>
        <Image src={flag} alt={countryName} />
        <Content>
          <Title>{countryName}</Title>
        </Content>
      </Wrapper>
    </Link >
  )
}

export default CountryCard;

const Wrapper = styled.div`
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
  width: 320px;
`;

const Image = styled.img`
  height: 180px;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const Content = styled.div`
  color: black;
`;

const Title = styled.h3`
`;