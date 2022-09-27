import { Container, Content } from "./header";
import LogoImg from "../../assets/logo.svg";
export function Header() {
  function newTransaction() {
    return "";
  }
  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="dt money" />
        <button type="button" onClick={newTransaction}>
          Nova Transação
        </button>
      </Content>
    </Container>
  );
}
