import { useState } from "react";
import "./App.css";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  //custom hook
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };
  const convert = () => setConvertedAmount(amount * currencyInfo[to]);
  // convert();
  return (
    <div className="w-full h-screen flex flex-wrap items-center justify-center bg-[url('https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-center bg-cover bg-no-repeat bg-slate-500 bg-blend-multiply">
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-400 rounded-lg p-5 backdrop-blur-sm">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full">
              <InputBox
                label="From"
                autoFocus
                amount={amount}
                onAmountchange={(value) => setAmount(value)}
                currencyOptions={options}
                selectCurrency={from}
                onCurrencyChange={(currencyFrom) => setFrom(currencyFrom)}
              />
            </div>
            <div className="relative text-center border-[1px] rounded-xl">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-4 py-1 pb-1.5"
                onClick={swap}
              >
                Swap &#8644;
              </button>
            </div>
            <div className="w-full">
              <InputBox
                label="To"
                currencyOptions={options}
                onCurrencyChange={(currencyTo) => setTo(currencyTo)}
                selectCurrency={to}
                amount={convertedAmount}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 text-white py-4 pb-3.5"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
