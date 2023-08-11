import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px;
  text-align: center;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 2px solid black;
  border-radius: 5px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: black;
  }
`;


export const Button = styled.button`
  padding: 10px 20px;
  margin: 0 1%;
  font-size: 16px;
  border: 2px solid black;
  cursor: pointer;
  background-color: transparent;
  color: black;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: black;
    color: white;
  }

  &:focus {
    outline: none;
    border-color: black;
  }
`;