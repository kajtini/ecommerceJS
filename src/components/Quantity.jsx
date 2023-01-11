import iconPlus from "../assets/icons/icon-plus.svg";
import iconMinus from "../assets/icons/icon-minus.svg";
import { useAmount, useAmountUpdate } from "../context/AmountContext";

function Quantity() {
  const amount = useAmount();
  const setAmount = useAmountUpdate();

  return (
    <div className="flex items-center justify-between bg-neutral-light-grayish bg-opacity-20 py-4 px-6 rounded-xl mb-3 md:mb-0">
      <img
        className="cursor-pointer"
        src={iconMinus}
        alt="minus icon"
        onClick={() =>
          setAmount((prevAmount) => (prevAmount > 0 ? prevAmount - 1 : 0))
        }
      />
      <span className="font-bold">{amount}</span>
      <img
        className="cursor-pointer"
        src={iconPlus}
        alt="plus icon"
        onClick={() => setAmount((prevAmount) => prevAmount + 1)}
      />
    </div>
  );
}

export default Quantity;
