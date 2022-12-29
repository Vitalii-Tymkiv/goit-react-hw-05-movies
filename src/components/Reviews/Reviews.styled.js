import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
`;

export const Item = styled.li`
  padding: 10px;

  width: 100%;
  background-color: #26f3fa;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;
`;

export const Author = styled.p`
  margin-bottom: 8px;
  padding: 8px 0;

  font-size: 18px;
  font-weight: 500;
  border-bottom: 1px solid black;
`;

export const NoReviews = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 18px;
`;
