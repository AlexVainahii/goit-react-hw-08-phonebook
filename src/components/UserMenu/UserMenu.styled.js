import styled from '@emotion/styled';
export const UserContainer = styled.div`
  display: flex;
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

export const UserTitle = styled.h2`
  margin: 15px;
  margin-left: 10px;
  font-size: large;
  display: block;
  padding: 8px;
  text-align: center;
  border-radius: 6px;
  text-decoration: none;
  color: white;
  text-shadow: 2px 2px 2px #000, 0 2px 2px #000, -2px 0 2px #000,
    0 -2px 2px #000;
  @media (max-width: 650px) {
    margin: 0;
  }
`;
export const UserButton = styled.h2`
  margin: 15px;
  margin-left: 5px;
  font-size: large;
  display: block;
  padding: 8px;
  text-align: center;
  border-radius: 6px;
  text-decoration: none;
  color: white;
  text-shadow: 2px 2px 2px #000, 0 2px 2px #000, -2px 0 2px #000,
    0 -2px 2px #000;
  &:hover {
    scale: 1.2;
    color: orange;
  }
  @media (max-width: 650px) {
    margin: 0;
  }
`;
