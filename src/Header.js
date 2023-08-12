import React from 'react';
import styled from 'styled-components';
import NavigationBar from './NavigationBar';



const HeaderWrapper = styled.header`
  background-color: black;
  color: white;
  padding: 10px;
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Timr.</h1>
      <NavigationBar />
    </HeaderWrapper>
  );
};

export default Header;
