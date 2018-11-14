import React from 'react';

import logo from '../../assets/logo.png';

import { Container, Form } from './styles';

import CompareList from '../../components/CompareList';


const Main = () => (
  <Container>
    <img src={logo} alt="Github Compare" width="200" />

    <Form>
      <input type="text" placeholder="Usuário/Repositório" />
      <button type="submit">Ok</button>
    </Form>
    <CompareList></CompareList>
  </Container>
)

export default Main;