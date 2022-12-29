import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div``;
export const Heading = styled.h2`
  margin-bottom: 16px;
`;

export const List = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
  margin-bottom: 20px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  padding: 8px;
  min-width: 100px;
  height: 40px;

  text-decoration: none;
  text-align: center;
  color: inherit;

  font-size: 18px;
  font-weight: 500;
  background-color: #225de6;
  border-radius: 4px;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #fff;
    background-color: #ddd0d0;
  }

  &.active {
    color: #fff;
    background-color: #ddd0d0;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;
