import styled from "styled-components";

export const ContainerAll = styled.div`
  width: 90vw;
  margin: 0 5vw;
  background: #f5f5f5;

  @media (min-width: 1024px) {
    position: fixed;
    top: 12vh;
    width: 25vw;
    right: 4rem;
    margin: 0;
  }
  @media (min-width: 1920px) {
    width: 20vw;
    right: 8rem;
  }
`;
export const ContainerCard = styled.div`
  overflow-y: scroll;
  height: 20vh;
`;

export const CartName = styled.p`
  color: #fff;
  background: #27ae60;
  width: 80%;
  margin: 0;
  height: 2rem;
  padding: 5% 10%;
  font-weight: 600;
  border-top-left-radius: 0.7rem;
  border-top-right-radius: 0.7rem;
  @media (min-width: 768px) {
    padding: 2% 10%;
  }
`;

export const Empty = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #f5f5f5;
`;

export const EmptyName = styled.p`
  font-weight: 600;
`;

export const Total = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid lightgrey;
  background: #f5f5f5;
  p {
    margin-left: 1rem;
  }
  span {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    margin-right: 1rem;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  button {
    background: #e0e0e0;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    height: 2.8rem;
    font-weight: 600;
    color: #828282;
    cursor: pointer;
  }
`;
