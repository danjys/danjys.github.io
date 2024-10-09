import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 3rem;
  background-color: #1f1f1f;
  color: white;
  text-align: center;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
`;

function About() {
  return (
    <AboutContainer>
      <h2>About Me</h2>
      <AboutText>
        I'm a passionate web developer with experience in building modern web applications using React, JavaScript, and other web technologies.
      </AboutText>
    </AboutContainer>
  );
}

export default About;
