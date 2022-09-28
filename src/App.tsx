import { Header } from "./components/header/index";
import { TransactionTable } from "./components/tableTransaction";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { useState } from "react";
import { NewTransactionModal } from "./components/newTransactionModal/index";

Modal.setAppElement("#root");
export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);
  function openNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }
  function closeNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <>
      <GlobalStyle />
      <Header openNewTransactionModal={openNewTransactionModal} />
      <TransactionTable />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        handleCloseNewTransaction={closeNewTransactionModal}
      />
    </>
  );
}
