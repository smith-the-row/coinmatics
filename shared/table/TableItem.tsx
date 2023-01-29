import { clsx } from "clsx";
import { formatCurrency } from "../../utils/formatCurrency";

interface TableProps {
  name: String | any;
  price: String | any;
  change: Number | any;
  img: String | any;
  symbol: String | any;
}

const TableItem = ({ name, price, change, img, symbol }: TableProps) => {
  const classColor = (isLower: number) =>
    clsx({
      ["font-sec font-medium py-4 hidden md:block"]: true,
      ["font-sec font-medium text-danger"]: isLower < 0,
      ["font-sec font-medium py-4 text-success"]: isLower > 0,
    });

  return (
    <div className="grid grid-cols-3 md:grid-cols-5 bg-card/60 mx-2 px-2">
      <div className=" py-3 col-span-2 flex gap-4 items-center">
        <div className="w-[12%] md:w-[6%]">
          <img src={img} alt={name} />
        </div>
        <div className="font-sec font-bold text-paper">{name}</div>
      </div>
      <div className="font-sec  py-3 font-bold text-paper uppercase hidden md:block">
        {symbol}
      </div>
      <div className={classColor(change)}>{change.toFixed(2)}%</div>
      <div className="font-medium py-5">{formatCurrency(price)}</div>
    </div>
  );
};

export default TableItem;
