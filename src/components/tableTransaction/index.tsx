import { useEffect } from "react";
import { api } from "../../services/api";
import { Summary } from "../summary";
import { Container } from "./table";
import { TableRowInfo } from "./tablerow";

export function TransactionTable() {
  useEffect(() => {
    api.get("transactions").then(({ data }) => console.log(data));
  }, []);
  return (
    <Container>
      <Summary/>
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
          <TableRowInfo
            title="Dev Site"
            category="Sold"
            date="25/09/2022"
            type="deposit"
            value={12000}
          />
          <TableRowInfo
            title="Rent"
            category="House"
            date="20/09/2022"
            type="withdraw"
            value={1800}
          />
        </tbody>
      </table>
    </Container>
  );
}
