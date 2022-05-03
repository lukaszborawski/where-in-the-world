import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom'
import { CountriesContext } from '../providers/CountriesProvider'
import arrowIcon from '../assets/icons/arrow-back.svg'



const CountryDetail = () => {

  const { id } = useParams();
  const { countries } = useContext(CountriesContext);

  let country = countries.find(item => {
    return item.alpha3Code === id;
  });

  const { name, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages, flag, borders } = country;

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
          {nativeName && (
            <Detail>
              Native Name:
              <Value>
                {nativeName}
              </Value>
            </Detail>
          )}
          {population && (
            <Detail>
              Population:
              <Value>
                {population.toLocaleString()}
              </Value>
            </Detail>
          )}
          {region && (
            <Detail>
              Region:
              <Value>
                {region}
              </Value>
            </Detail>
          )}
          {subregion && (
            <Detail>
              Sub Region:
              <Value>
                {subregion}
              </Value>
            </Detail>
          )}
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
          {borders && (
            <Detail>
              Border Countries::
              <Borders>
                {borders.map((item) => {
                  let bordersCountry = countries.find(border => {
                    return border.alpha3Code === item;
                  });
                  return (
                    <BorderButton to={`/country/${bordersCountry.alpha3Code}`} key={item} >{bordersCountry.name}</BorderButton>
                  )
                }
                )}
              </Borders>
            </Detail>
          )}
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
  display: inline-flex;
  padding: 8px 30px;
  background: ${({ theme }) => theme.element};
  color: ${({ theme }) => theme.text};
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
`;

const Icon = styled.div`
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

const BorderButton = styled(Link)`
  padding: 5px 5px;
  background: ${({ theme }) => theme.element};
  color: ${({ theme }) => theme.text};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  font-weight: 400;
`;

const Borders = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 20px;
`;