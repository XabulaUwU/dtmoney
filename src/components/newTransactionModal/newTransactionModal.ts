import styled from "styled-components";

export const Container = styled.form`
  h2 {
    margin-bottom: 2rem;
    color: var(--titulos);
  }
  input {
    height: 4rem;
    width: 30rem;
    padding: 1rem;
    background: #e7e9ee;
    border: 1px solid #d7d7d7;
    border-radius: 5px;
    margin-bottom: 1rem;
  }
  button {
    height: 4rem;
    width: 30rem;
    padding: 1rem;
    background: #33cc95;
    color: var(--shapePrincipal);
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    border-radius: 5px;
    transition: all 0.2s;
    &:hover {
      filter: brightness(0.75);
    }
  }
`;
export const ButtonContainerStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  button {
    width: 14rem;
    background-color: #fff;
    color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
