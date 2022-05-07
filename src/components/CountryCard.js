import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const CountryCard = ({ name, flag, population, region, capital, alpha3Code }) => {
  return (
    <Link to={`country/${alpha3Code}`}>
      <Wrapper>
        <Image src={flag} alt={name} />
        <Content>
          <Title>{name}</Title>
          <Detail>
            Population:
            <Value>
              {population.toLocaleString()}
            </Value>
          </Detail>
          <Detail>
            Region:<Value>{region}</Value>
          </Detail>
          {capital && (
            <Detail>
              Capital:<Value>{capital}</Value>
            </Detail>
          )}
        </Content>
      </Wrapper>
    </Link >
  )
}

export default CountryCard;

const Wrapper = styled.div`
  width: 320px;
  min-height: 400px;
  background-color: ${({ theme }) => theme.element};
  color: ${({ theme }) => theme.text};
  box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 0.2);
`;

const Image = styled.img`
  height: 190px;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const Content = styled.div`
  padding: 26px 20px;
`;

const Title = styled.h3`
  margin-bottom: 26px;
  font-size: 20px;
`;

const Detail = styled.div`
  margin-bottom: 5px;
  font-weight: 600;
`;

const Value = styled.span`
  margin-left: 7px;
  font-weight: 400;
`;