import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 4px;
  margin-bottom: 32px;

  text-decoration: none;
  color: #47351f;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    color: #225de6;
  }
`;
