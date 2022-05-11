import React from 'react';
import styled from 'styled-components'
import { motion } from 'framer-motion';

const loaderVariants = {
  animationOne: {
    x: [-50, 50, 0],
    transition: {
      x: {
        repeat: Infinity,
        duration: 0.5,
      },
    }
  }
};

const Loader = () => {
  return (
    <>
      <BouncingBall
        variants={loaderVariants}
        animate="animationOne"
      ></BouncingBall>
    </>
  )
}

export default Loader;

const BouncingBall = styled(motion.div)`
  width: 10px;
  height: 10px;
  margin: 40px auto;
  border-radius: 50%;
  background: ${({ theme }) => (theme.isDark ? "white" : "black")};
`;