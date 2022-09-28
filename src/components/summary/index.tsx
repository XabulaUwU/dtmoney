import { Container } from "./summary";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { Table } from "./div";
export function Summary() {
  return (
    <Container>
      <Table img={incomeImg} type="income" value="R$ 1000,00" />
      <Table img={outcomeImg} type="outcome" value="R$ 1000,00" />
      <Table img={totalImg} type="total" value="R$ 0,00" />
    </Container>
  );
}
