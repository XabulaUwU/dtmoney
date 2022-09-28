import styled from "styled-components";
export const Container = styled.div`
  table {
    width: 1120px;
    border-spacing: 0 0.5rem;
    margin: 0 auto;
    th {
      color: var(--textos);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }
    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shapePrincipal);
      color: var(--textos);
      border-radius: 0.25rem;
      &:first-child {
        color: var(--titulos);
      }
      &.deposit {
        color: var(--green);
      }
      &.withdraw {
        color: var(--red);
      }
    }
  }
`;
