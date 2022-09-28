import { Container, Content } from "./header";
import LogoImg from "../../assets/logo.svg";
interface HeaderProps {
  openNewTransactionModal: () => void;
}

export function Header({ openNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="dt money" />
        <button type="button" onClick={openNewTransactionModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  );
}
