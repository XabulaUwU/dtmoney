interface TableProps {
  type: string;
  img: string;
  value: string;
}
export function Table({ type, img, value }: TableProps) {
  return (
    <div className={type}>
      <header>
        <p>{type[0].toUpperCase().concat(type.slice(1))}</p>
        <img src={img} alt={type} />
      </header>
      <strong>{value}</strong>
    </div>
  );
}
