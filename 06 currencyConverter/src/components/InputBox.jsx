import React from "react";

function InputBox({
  label,
  amount,
  currencyOptions = [],
  onAmountChange,
  onCurrencyChange,
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  return (
    <div className={`bg-white p-3 rounded-lg tex-sm flex${className}`}>
      <div className="w-1-2">
        <label className="text-black/40 mb-2 inline-block">{label}</label>
        <input
          type="number"
          className="outline-none w-full bg-transparent py-1.5"
          placeholder="Amount"
          value={amount}
          disabled={amountDisabled}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          name=""
          id=""
        />
      </div>
    </div>
  );
}

export default InputBox;
