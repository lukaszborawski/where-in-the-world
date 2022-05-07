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
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.element};
  z-index: 2;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;
`;

const Title = styled.h1`
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  ${({ theme }) => theme.lg} {
    font-size: 24px;
  }
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

const Icon = styled.div`
  width: 20px;
  height: 20px;
  background: url(${moonIcon});
  filter: ${({ theme }) => (theme.isDark ? 'invert(1)' : 'invert(0)')};
`;

const ButtonText = styled.h2`
   font-size: 15px;
   font-weight: 300;
   margin-left: 5px;
   color: ${({ theme }) => theme.text};
   ${({ theme }) => theme.lg} {
    font-size: 18px;
  }
`;