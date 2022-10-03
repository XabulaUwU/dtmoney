import { Container } from "./newTransactionModal";
import Modal from "react-modal";
import { ButtonContainer } from "./buttonContainer";
import { FormEvent, useContext, useState } from "react";
import { TransactionsContext } from "../../context/transactionContext";
interface newTransactionModalProps {
  isOpen: boolean;
  handleCloseNewTransaction: () => void;
}
/*
interface newTransactionProps {
  title: string;
  value: number;
  isEntry: "income" | "withdraw";
  category: string;
}
*/

export function NewTransactionModal({
  isOpen,
  handleCloseNewTransaction,
}: newTransactionModalProps) {
  const [type, setType] = useState("" as "withdraw" | "deposit");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("");
  const { createTransaction } = useContext(TransactionsContext);
  async function handleCreateNewtransaction(event: FormEvent) {
    event.preventDefault();

    const date = new Date().toDateString();
    await createTransaction({ title, value, type, category, date });

    setType("" as "withdraw" | "deposit");
    setTitle("");
    setValue(0);
    setCategory("");
    handleCloseNewTransaction();
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseNewTransaction}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container onSubmit={handleCreateNewtransaction}>
        <h2>Register transaction</h2>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Value"
          type="number"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
        <ButtonContainer type={type} func={setType} />
        <input
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit" className="redeem">
          Redeem
        </button>
      </Container>
    </Modal>
  );
}
