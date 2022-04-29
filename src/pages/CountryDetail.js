import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom'
import { CountriesContext } from '../providers/CountriesProvider'
import arrowIcon from '../assets/icons/arrow-back.svg'



const CountryDetail = () => {

  const { id } = useParams();
  const { countries } = useContext(CountriesContext);

  let country = countries.find(item => {
    return item.name === id;
  });

  const { name, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages, flag } = country;

  return (
    <Wrapper>
      <BackButton to="/">
        <Icon />
        Back
      </BackButton>
      <CountryWrapper>
        <Image src={flag} alt={name} />
        <Content>
          <Title>{name}</Title>
          <Detail>
            Native Name:
            <Value>
              {nativeName}
            </Value>
          </Detail>
          <Detail>
            Population:
            <Value>
              {population.toLocaleString()}
            </Value>
          </Detail>
          <Detail>
            Region:<Value>{region}</Value>
          </Detail>
          <Detail>
            Sub Region:
            <Value>
              {subregion}
            </Value>
          </Detail>
          {capital && (
            <Detail>
              Capital:
              <Value>
                {capital}
              </Value>
            </Detail>
          )}
          <InnerWrapper>
            {topLevelDomain && (
              <Detail>
                Top Level Domain:
                <Value>
                  {topLevelDomain[0]}
                </Value>
              </Detail>
            )}
            {currencies && (
              <Detail>
                Currencies:
                <Value>
                  {currencies[0].name}
                </Value>
              </Detail>
            )}
            {languages && (
              <Detail>
                Languages:
                <Value>
                  {languages.map(lang => lang.name).join(', ')}
                </Value>
              </Detail>
            )}
          </InnerWrapper>
        </Content>
      </CountryWrapper>
    </Wrapper>
  )
}

export default CountryDetail;

const Wrapper = styled.main`
  padding: 100px 20px 0 20px;
`;

const BackButton = styled(Link)`
  display: flex;
  width: 120px;
  padding: 8px 0px;
  justify-content: center;
  background: ${({ theme }) => theme.element};
  color: ${({ theme }) => theme.text};
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
`;

const Icon = styled.div`
  display: block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  background: url(${arrowIcon});
  filter: ${({ theme }) => (theme.isDark ? 'invert(1)' : 'invert(0)')};
`;

const CountryWrapper = styled.div`
  margin-top: 30px;
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

const InnerWrapper = styled.div`
  padding: 25px 0;
`;

const Title = styled.h3`
  margin-bottom: 26px;
  font-size: 20px;
`;

const Detail = styled.div`
  margin-bottom: 8px;
  font-weight: 600;
`;

const Value = styled.span`
  margin-left: 7px;
  font-weight: 400;
`;