import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: black;
  color: white;
  text-align: center;
  padding: 20px;
  position: absolute;
  width: 100%;
`;

const BuyMeCoffeeLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  margin-left: 10px;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        &copy; {new Date().getFullYear()} Timr. . All rights reserved.
      </p>
      <p>
        If you find this app helpful, consider{' '}
        <BuyMeCoffeeLink href="https://www.buymeacoffee.com/iamjeel">
          buying me a coffee
        </BuyMeCoffeeLink>{' '}
        to support development.
      </p>
    </FooterContainer>
  );
};

export default Footer;
