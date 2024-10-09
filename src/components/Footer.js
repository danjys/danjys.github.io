import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #1f1f1f;
  padding: 1rem;
  text-align: center;
  color: white;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Dhananjaya Somanna. All Rights Reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
