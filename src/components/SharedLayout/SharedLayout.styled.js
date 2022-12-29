import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16;
`;

export const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 60px;
  padding-left: 32px;
  padding-right: 32px;
  padding-top: 16px;
  padding-bottom: 16px;
  margin-bottom: 32px;
  color: #fff;
  background-color: #26f3fa;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 15px 10px -15px;

  > nav {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
  }
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 26px;
  border-radius: 10px;
  text-decoration: none;
  text-transform: capitalize;
  color: #fff;

  background-color: #b7d0da;
  font-size: 22px;
  font-weight: 500;

  &.active {
    color: #47351f;
    background-color: #b7d0da;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #fff;
    background-color: #43a1dc;
  }
`;
