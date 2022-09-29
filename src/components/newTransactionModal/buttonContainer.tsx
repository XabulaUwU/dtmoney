import { useState } from "react";
import IncomeImg from "../../assets/income.svg";
import OutcomeImg from "../../assets/outcome.svg";
import { ButtonContainerStyle } from "./newTransactionModal";
interface ButtonContainerProps {
  type: string;
  func: (e: string) => void;
}

export function ButtonContainer({ type, func }: ButtonContainerProps) {
  function isIncome() {
    func("income");
    console.log(type);
  }
  function isWithdraw() {
    func("withdraw");
    console.log(type);
  }
  return (
    <ButtonContainerStyle>
      <button type="button" onClick={isIncome}>
        Entrada <img src={IncomeImg} alt="Entrada" />
      </button>
      <button type="button" onClick={isWithdraw}>
        Saída <img src={OutcomeImg} alt="Saída" />
      </button>
    </ButtonContainerStyle>
  );
}
