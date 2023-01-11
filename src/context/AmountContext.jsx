import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const AmountContext = createContext();
const AmountUpdateContext = createContext();

export function useAmount() {
  return useContext(AmountContext);
}

export function useAmountUpdate() {
  return useContext(AmountUpdateContext);
}

export function AmountProvider({ children }) {
  const [amount, setAmount] = useState(0);

  return (
    <AmountContext.Provider value={amount}>
      <AmountUpdateContext.Provider value={setAmount}>
        {children}
      </AmountUpdateContext.Provider>
    </AmountContext.Provider>
  );
}
