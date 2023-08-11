import React from 'react';
import styled from 'styled-components';


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
    </HeaderWrapper>
  );
};

export default Header;
