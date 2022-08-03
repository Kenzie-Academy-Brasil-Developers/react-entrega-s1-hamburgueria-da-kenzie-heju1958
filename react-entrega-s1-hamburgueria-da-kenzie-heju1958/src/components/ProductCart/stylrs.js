import styled from "styled-components";

export const ContainerCart = styled.div`
  background: #f5f5f5;
  width: 100%;
  display: flex;

  img {
    width: 5rem;
    height: 5rem;
    background: #e0e0e0;
    border-radius: 0.8rem;
    margin: 0.5rem;
  }
  @media (min-width: 1024px) {
    img {
      width: 3.5rem;
      height: 3.5rem;
    }
  }
  p {
    width: 4rem;
    font-weight: 600;
    font-size: 0.8rem;
  }
  button {
    position: relative;
    width: 4rem;
    height: 2rem;
    right: 1rem;
    top: 1rem;
    border: none;
    background: #f5f5f5;
    color: #bdbdbd;
  }
  @media (min-width: 425px) {
    button {
      left: 5rem;
    }
  }
  @media (min-width: 768px) {
    button {
      left: 24rem;
    }
  }
  @media (min-width: 1024px) {
    button {
      left: 0rem;
      width: 3rem;
      height: 2rem;
      font-size: 0.6rem;
    }
  }
  @media (min-width: 1440px) {
    button {
      position: relative;
      left: 1rem;
    }
  }
  @media (min-width: 1920px) {
    button {
      position: relative;
      left: 6rem;
    }
  }
`;

export const CategoryCart = styled.p`
  position: relative;
  top: 2rem;
  right: 4rem;
  font-size: 0.6rem;
  color: #828282;
`;
