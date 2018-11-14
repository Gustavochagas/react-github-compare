import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

export const Form = styled.form`
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