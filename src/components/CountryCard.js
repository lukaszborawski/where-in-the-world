import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const CountryCard = ({ name, flag, population, region, capital }) => {
  return (
    <Link to={`country/${name}`}>
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
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
`;

const Image = styled.img`
  height: 180px;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const Content = styled.div`
  padding: 26px 20px;
  color: black;
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