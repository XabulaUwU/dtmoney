import { formatter } from "../../helpers/formatter";
interface TableRowInfoProps {
  title: string;
  value: number;
  type: "deposit" | "withdraw";
  category: string;
  date: string;
}
export function TableRowInfo({
  title,
  value,
  type,
  category,
  date,
}: TableRowInfoProps) {
  const IsWithdraw =
    type === "withdraw"
      ? `${formatter
          .format(value)
          .slice(0, 2)
          .concat("-")
          .concat(formatter.format(value).slice(2))}`
      : `${formatter.format(value)}`;
  return (
    <tr>
      <td>{title}</td>
      <td className={type}>{IsWithdraw}</td>
      <td>{category}</td>
      <td>{date}</td>
    </tr>
  );
}
