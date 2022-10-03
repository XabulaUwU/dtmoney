import { createContext, useEffect, useState, ReactNode } from "react";
import { api } from "../services/api";

interface TransactionsProviderProps {
  children: ReactNode;
}

interface ITransaction {
  id: number;
  title: string;
  value: number;
  type: "withdraw" | "deposit";
  category: string;
  date: string;
}

type TransactionInput = Omit<ITransaction, "id">;

type TransactionTypeData = {
  transactions: ITransaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
};

export const TransactionsContext = createContext<TransactionTypeData>(
  {} as TransactionTypeData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);
  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post("/transactions", transactionInput);
    const { transaction } = response.data;
    setTransactions([...transactions, transaction]);
  }
  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}
