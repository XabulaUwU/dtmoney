import IncomeImg from "../../assets/income.svg";
import OutcomeImg from "../../assets/outcome.svg";
import { ButtonContainerStyle, RadioBox } from "./newTransactionModal";
interface ButtonContainerProps {
  type: "withdraw" | "deposit";
  func: (e: "withdraw" | "deposit") => void;
}

export function ButtonContainer({ type, func }: ButtonContainerProps) {
  return (
    <ButtonContainerStyle>
      <RadioBox
        type="button"
        onClick={() => func("deposit")}
        isActive={type === "deposit" ? true : false}
        activeColor="green"
      >
        Entrada <img src={IncomeImg} alt="Entrada" />
      </RadioBox>
      <RadioBox
        type="button"
        onClick={() => func("withdraw")}
        isActive={type === "withdraw" ? true : false}
        activeColor="red"
      >
        Saída <img src={OutcomeImg} alt="Saída" />
      </RadioBox>
    </ButtonContainerStyle>
  );
}
/*


*/
