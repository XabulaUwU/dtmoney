import { useContext } from "react";
import { TransactionsContext } from "../../context/transactionContext";
import { Summary } from "../summary";
import { Container } from "./table";
import { TableRowInfo } from "./tablerow";

export function TransactionTable() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <Container>
      <Summary />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((e) => {
            return (
              <TableRowInfo
                key={e.id}
                title={e.title}
                category={e.category}
                date={e.date}
                type={e.type}
                value={e.value}
              />
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}
