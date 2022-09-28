import styled from "styled-components";
export const Container = styled.header`
  background-color: var(--blue);
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  max-width: 1120px;
  justify-content: space-between;
  margin: 0 auto;
  padding: 1rem 2rem 10rem;

  button {
    border-radius: 0.25rem;
    border: none;
    padding: 0 2rem;
    font-size: 1rem;
    background-color: var(--blue-light);
    height: 3rem;
    transition: filter 0.2s;
    color: #fff;

    &:hover {
      filter: opacity(0.75);
    }
  }
`;
