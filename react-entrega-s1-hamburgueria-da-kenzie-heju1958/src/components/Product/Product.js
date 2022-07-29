import styled from "styled-components";

export const Position = styled.li`
  list-style: none;
  gap: 1rem;
`;
export const Name = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
`;

export const Price = styled.p`
  color: #27ae60;
  font-weight: 600;
`;

export const Card = styled.div`
  height: 21rem;
  width: 16.5rem;
  background: #ffffff;
  border: 2px solid #e0e0e0;
  border-radius: 5px;

  div {
    background: #f5f5f5;
  }
  img {
    width: 10rem;
    height: 10rem;
    position: relative;
    left: 3rem;
    background: #f5f5f5;
  }
  p {
    margin: 0.8rem;
  }
  button {
    background: #27ae60;
    border: 2px solid #27ae60;
    border-radius: 4px;
    color: #ffffff;
    width: 5.5rem;
    height: 2rem;
    cursor: pointer;
    margin-left: 1rem;
  }
`;
