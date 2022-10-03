import { Container } from "./summary";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { Table } from "./div";
import { useContext } from "react";
import { TransactionsContext } from "../../context/transactionContext";
export function Summary() {
  const { transactions } = useContext(TransactionsContext);
  console.log(transactions);

  const totalDeposits = transactions.reduce((prev, transaction) => {
    if (transaction.type === "deposit") {
      return prev + transaction.value;
    }

    return prev;
  }, 0);

  const totalOutcome = transactions.reduce((prev, transaction) => {
    if (transaction.type === "withdraw") {
      return prev + transaction.value;
    }
    return prev;
  }, 0);

  return (
    <Container>
      <Table img={incomeImg} type="income" value={`R$ ${totalDeposits}`} />
      <Table img={outcomeImg} type="outcome" value={`R$ ${totalOutcome}`} />
      <Table
        img={totalImg}
        type="total"
        value={`R$ ${totalDeposits - totalOutcome}`}
      />
    </Container>
  );
}
