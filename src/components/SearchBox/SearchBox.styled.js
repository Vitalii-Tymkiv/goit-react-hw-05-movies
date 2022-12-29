import styled from 'styled-components';

export const Form = styled.form`
  display: inline-flex;

  margin-bottom: 32px;
`;

export const Input = styled.input`
  padding: 10px 15px;
  border-radius: 8px;
  border: 3px solid #26f3fa;
  margin-right: 20px;
  font-size: 20px;
  outline: transparent;
  :hover {
    background-color: #f4f8fa;
  }
`;
export const Button = styled.button`
  cursor: pointer;
  padding: 8px 15px;
  margin-bottom: 15px;
  box-shadow: 1px 2px 2px 0 rgb(0, 0, 0/0.5);
  transition: box-shadow 250ms linear;
  border-radius: 8px;
  border: 3px solid #26f3fa;
  font-weight: bold;
  align-self: baseline;
  :hover {
    background-color: #2196f3;
    color: white;
  }
`;
