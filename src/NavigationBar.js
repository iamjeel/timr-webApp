import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  color: white;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
`;

const ListItem = styled.li`
  margin: 0 15px;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 18px;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;

const NavigationBar = () => {
  return (
    <Nav>
      <List>
        <ListItem>
          <NavLinkStyled exact to="/">
            Home
          </NavLinkStyled>
        </ListItem>
        <ListItem>
          <NavLinkStyled to="/stopwatch">Stopwatch</NavLinkStyled>
        </ListItem>
        <ListItem>
          <NavLinkStyled to="/alarm">Alarm</NavLinkStyled>
        </ListItem>
        <ListItem>
          <NavLinkStyled to="/intervaltimer">Interval Timer</NavLinkStyled>
        </ListItem>
      </List>
    </Nav>
  );
};

export default NavigationBar;
