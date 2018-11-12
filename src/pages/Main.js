import React from 'react';
import styled from 'styled-components';

import logo from '../assets/logo.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;


  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background: #FFF;
    border: 1px solid #444;
    font-size: 18px;
    color: #444;
    border-radius: 3px;
    outline: 0;
  }

  button {
    height: 55px;
    padding: 0 20px;
    margin-left: 10px;
    background: #63f5b0;
    border: 1px solid #63f5b0;
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    outline: 0;
    cursor: pointer;
    border-radius: 3px;
    transition: all .2s ease-in-out;

    &:hover {
      background: #52D89F;
      border: 1px solid #52D89F;
    }
  }
`;

const Main = () => (
  <Container>
    <img src={logo} alt="Github Compare" width="200" />

    <Form>
      <input type="text" placeholder="Usuário/Repositório" />
      <button type="submit">Ok</button>
    </Form>
  </Container>
)

export default Main;