import styled from "styled-components";

export const Header = styled.header`
  background: #f5f5f5;
  width: 100%;
  height: 7rem;
  text-align: center;
  @media (min-width: 1024px) {
    height: 5rem;
  }
  @media (min-width: 1920px) {
    height: 5rem;
  }
  img {
    margin-top: 1rem;
  }
  @media (min-width: 1024px) {
    img {
      position: absolute;
      left: 4rem;
    }
  }
  @media (min-width: 1920px) {
    img {
      position: absolute;
      left: 8rem;
    }
  }
  div {
    max-width: 300px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    padding: 0.5rem;
  }
  div & :focus-within {
    border-color: lightgray;
  }
  @media (min-width: 1024px) {
    div {
      margin-top: 1rem;
      position: absolute;
      right: 4rem;
    }
  }
  @media (min-width: 1920px) {
    div {
      margin-top: 1rem;
      position: absolute;
      right: 8rem;
    }
  }
  input {
    width: 85%;
    background: transparent;
    outline: none;
    border: none;
    flex: 1;
  }

  button {
    background: #27ae60;
    border: 2px solid #27ae60;
    border-radius: 4px;
    color: #ffffff;
    width: 5.5rem;
    height: 2rem;
    cursor: pointer;
  }
`;
