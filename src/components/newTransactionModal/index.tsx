import { Container } from "./newTransactionModal";
import Modal from "react-modal";
import { ButtonContainer } from "./buttonContainer";
import { useState } from "react";
interface newTransactionModalProps {
  isOpen: boolean;
  handleCloseNewTransaction: () => void;
}

export function NewTransactionModal({
  isOpen,
  handleCloseNewTransaction,
}: newTransactionModalProps) {
  const [isEntry, setIsEntry] = useState("");
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseNewTransaction}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h2>Register transaction</h2>
        <input placeholder="Title" />
        <input placeholder="Value" type="number" />
        <ButtonContainer type={isEntry} func={setIsEntry} />
        <input placeholder="Category" />
        <button type="submit">Redeem</button>
      </Container>
    </Modal>
  );
}
