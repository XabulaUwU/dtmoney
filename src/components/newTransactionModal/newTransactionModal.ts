import styled from "styled-components";
import { transparentize } from "polished";
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
  .redeem {
    height: 4rem;
    width: 30rem;
    padding: 1rem;
    background-color: #33cc95;
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
`;
interface RadioBoxProps {
  isActive: boolean;
  activeColor: "red" | "green";
}

const colors = {
  green: "#33CC95",
  red: "#E62E4D",
};
export const RadioBox = styled.button<RadioBoxProps>`
  width: 14rem;
  background-color: ${(props) =>
    props.isActive
      ? transparentize(0.8, colors[props.activeColor])
      : "transparent"};
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;

  padding: 1rem;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  border-radius: 5px;
  transition: all 0.2s;
  &:hover {
    filter: brightness(0.75);
  }
`;
