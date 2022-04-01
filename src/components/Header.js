import styled from 'styled-components'
import moonIcon from '../assets/icons/moon.svg'

const Header = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Title>Where in the world?</Title>
        <DarkModeButton>
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
  background: url(${moonIcon}) no-repeat center;
`;

const ButtonText = styled.h3`
   margin-left: 5px;
`;