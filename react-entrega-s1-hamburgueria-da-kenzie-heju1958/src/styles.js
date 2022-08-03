import styled from "styled-components";

export const Header = styled.header`
  background: #f5f5f5;
  width: 100%;
  height: 7rem;
  img {
    position: absolute;
    top: 1rem;
    left: 5rem;
  }
  @media (min-width: 1024px) {
    height: 5rem;
  }
  @media (min-width: 425px) {
    img {
      left: 9rem;
    }
  }
  @media (min-width: 768px) {
    img {
      left: 20rem;
    }
  }
  @media (min-width: 1024px) {
    img {
      top: 2rem;
      left: 8rem;
    }
  }
  input {
    position: absolute;
    top: 3rem;
    left: 1rem;
    width: 85%;
    height: 2rem;
    background: #ffffff;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    padding: 0.5rem;
  }
  @media (min-width: 425px) {
    input {
      width: 88%;
    }
  }
  @media (min-width: 768px) {
    input {
      width: 50%;
      left: 12rem;
    }
  }
  @media (min-width: 1024px) {
    input {
      width: 20%;
      top: 1rem;
      left: 42rem;
    }
    @media (min-width: 1440px) {
      input {
        left: 63rem;
      }
    }
    @media (min-width: 1920px) {
      input {
        left: 87rem;
      }
    }
  }
  button {
    position: absolute;
    top: 3.6rem;
    right: 1.5rem;
    background: #27ae60;
    border: 2px solid #27ae60;
    border-radius: 4px;
    color: #ffffff;
    width: 5.5rem;
    height: 2rem;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    button {
      right: 11.5rem;
    }
  }
  @media (min-width: 1024px) {
    button {
      top: 1.6rem;
      right: 8.6rem;
    }
  }
`;
