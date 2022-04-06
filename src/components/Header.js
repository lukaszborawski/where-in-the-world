import React, { useContext } from 'react';
import styled from 'styled-components';
import moonIcon from '../assets/icons/moon.svg';
import { ThemeContext } from '../providers/ThemeProvider';

const Header = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <ContentWrapper>
        <Title>Where in the world?</Title>
        <DarkModeButton onClick={toggleTheme}>
          <Icon />
          <ButtonText>Dark Mode</ButtonText>
        </DarkModeButton>
      </ContentWrapper>
    </Wrapper>
  )
}

export default Header;

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 80px;
  box-shadow: 0 2px 8px -5px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.text};
`;

const DarkModeButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0px 10px;
  border-radius: 8px;
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;
`;

const Icon = styled.i`
  display: block;
  width: 20px;
  height: 20px;
  background: url(${moonIcon});
`;

const ButtonText = styled.h3`
   margin-left: 5px;
   color: ${({ theme }) => theme.text};
`;