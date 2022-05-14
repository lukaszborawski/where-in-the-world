import React from 'react';
import styled from 'styled-components'
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <>
      <Wrapper>
        <CircleLoader
          animate={{ rotate: [0, 180, 360], borderWidth: [8, 2, 8] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
        ></CircleLoader>
      </Wrapper>
    </>
  )
}

export default Loader;

const Wrapper = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
`;

const CircleLoader = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 8px solid transparent;
  border-top-color: ${({ theme }) => theme.text};
  border-bottom-color: ${({ theme }) => theme.text};
  border-radius: 50%;
`;