import styled from "styled-components";
export const Container = styled.div`
  max-width: 1120px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  margin-top: -3rem;
  gap: 2rem;
  div {
    background-color: var(--shapePrincipal);
    padding: 1rem 2rem;
    border-radius: 0.25rem;
    header {
      display: flex;
      justify-content: space-between;
    }
    strong {
      display: block;
      font-size: 1.5rem;
      font-weight: 500;
    }
    &.total {
      background-color: var(--green);
      color: #fff;
    }
  }
`;
