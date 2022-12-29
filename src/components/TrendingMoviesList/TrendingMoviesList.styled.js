import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 8px;
  width: 100%;
  min-height: 60px;

  text-decoration: none;
  color: #fff;
  font-size: 22px;
  font-weight: 500;
  background-color: #26f3fa;
  border-radius: 4px;

  transform: scale(1);
  box-shadow: none;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #fff;
    background-color: #c7904e;
    transform: scale(1.03);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }

  > svg {
    margin-right: 8px;
  }
`;
