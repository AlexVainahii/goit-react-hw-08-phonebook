import styled from '@emotion/styled';

export const CardContainer = styled.div`
  padding: 15px;
  width: 100%;
  height: 40%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 15px;
  background: linear-gradient(
    to bottom,
    rgba(150, 255, 255, 1),
    rgba(0, 0, 0, 1)
  );
  border-radius: 5px;

  @media (max-width: 480px) {
    width: 100%;
    padding: 10px;
  }
`;

export const CardLabel = styled.label`
  font-size: 16px;
  color: white;
  text-shadow: 2px 2px 2px #000, 0 2px 2px #000, -2px 0 2px #000,
    0 -2px 2px #000;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
export const Input = styled.input`
  width: 100%;
  padding: 10px 5px;
  border: 1px solid lightgray;
  border-radius: 5px;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
