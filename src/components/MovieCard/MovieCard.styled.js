import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 16px;
`;
export const Image = styled.img`
  display: block;
  margin-bottom: 16px;
  width: 300px;
  height: auto;
  object-fit: cover;
`;
export const MovieTitle = styled.h2`
  margin-bottom: 8px;
`;

export const Rating = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;

  width: 70px;
  height: 40px;

  font-size: 18px;
  font-weight: 700;
  color: #fff;
  background-color: #000000;
  border-radius: 4px;
`;

export const ProdYear = styled.p`
  font-weight: bold;
  font-size: 18px;
  text-transform: Capitalize;
  margin-bottom: 8px;
`;

export const Info = styled.p`
  margin-bottom: 8px;
`;

export const InfoTitle = styled.p`
  font-weight: bold;
  margin-bottom: 8px;
`;

export const GenresList = styled.ul`
  display: flex;
  align-items: center;
  gap: 8px;

  list-style: none;
`;
export const Genres = styled.li`
  padding: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
