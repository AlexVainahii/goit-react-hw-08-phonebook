import styled from '@emotion/styled';

export const Form = styled.form`
  width: 100%;
  height: 50%;
  padding: 15px;
  margin: 0 auto;
  display: flex;

  flex-direction: column;
  gap: 20px;
  border-radius: 5px;
  background: linear-gradient(
    to bottom,
    rgba(150, 255, 255, 1),
    rgba(0, 0, 0, 1)
  );
  label {
    color: white;
    text-shadow: 2px 2px 2px #000, 0 2px 2px #000, -2px 0 2px #000,
      0 -2px 2px #000;
    text-align: center;
  }
  @media (max-width: 768px) {
    max-width: 100%;
  }
  @media (max-width: 480px) {
    height: 100%;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 5px;
  border: 1px solid lightgray;
  border-radius: 5px;
  font-weight: 700;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;

  color: white;
  text-shadow: 2px 2px 2px #000, 0 2px 2px #000, -2px 0 2px #000,
    0 -2px 2px #000;
  background: linear-gradient(to bottom, #65ad13, #647a4b);
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: linear-gradient(to bottom, #e1d71b, #c7bc2a);
    border: none;
  }
`;
