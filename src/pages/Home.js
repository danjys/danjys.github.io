import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ReactComponent as DeveloperSVG } from '../assets/developer.svg'; // Add your SVG here

const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1f1f1f;
  color: white;
  padding: 0 2rem;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const SVGContainer = styled(motion.div)`
  width: 300px;
  margin-top: 2rem;

  @media (min-width: 768px) {
    width: 500px;
  }
`;

function Home() {
  return (
    <HomeContainer>
      <Title
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        Dhananjaya Somanna
      </Title>
      <Subtitle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Developer | Programmer | Designer
      </Subtitle>
      <SVGContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <DeveloperSVG />
      </SVGContainer>
    </HomeContainer>
  );
}

export default Home;
