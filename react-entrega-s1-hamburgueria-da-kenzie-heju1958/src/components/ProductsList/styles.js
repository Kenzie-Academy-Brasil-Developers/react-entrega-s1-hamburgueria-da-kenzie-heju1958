import styled from "styled-components";

export const Lista = styled.ul`
  display: flex;
  padding: 1rem;
  gap: 1rem;

  @media (max-width: 1022px) {
    overflow-y: scroll;
  }
  @media (min-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-left: 2rem;
    width: 70%;
  }
  @media (min-width: 1440px) {
    width: 70%;
    gap: 2rem;
    justify-content: flex-start;
    margin-left: 4rem;
  }
  @media (min-width: 1920px) {
     width: 60%;
     margin-left: 7rem;
    }
`;
