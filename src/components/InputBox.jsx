import React, { useId } from "react";

function InputBox({
  label,
  autoFocus = false,
  amount,
  onAmountchange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  className,
}) {
  const amountInputId = useId();
  return (
    <div
      className={`bg-white p-3 rounded-lg text-sm m-auto my-2 flex ${className}`}
    >
      <div className="w-1/2 flex flex-col text-start p-4">
        <label
          htmlFor={amountInputId}
          className="text-black/40 text-lg font-semibold"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="border-b text-lg p-1 font-semibold outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          autoFocus={autoFocus}
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountchange && onAmountchange(Number(e.target.value))
          }
        />
      </div>
      <div className=" w-1/2 flex flex-wrap justify-end text-right p-4">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg p-1 bg-gray-200 cursor-pointer capitalize"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currencyOfCountry) => (
            <option key={currencyOfCountry} value={currencyOfCountry}>
              {currencyOfCountry}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
