import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo from "./hooks/useCurrencyInfo.js";
function App() {

    const [amount, setAmount] = useState(0)
    const [fromCurrency, setFromCurrency] = useState('usd')
    const [toCurrency, setToCurrency] = useState('pkr')
    const [convertedAmount, setConvertedAmount] = useState(0)

    const currencyInfo = useCurrencyInfo(
        fromCurrency
    );
    const options = Object.keys(currencyInfo)

    const swapCurrencies = () => {
        setFromCurrency(toCurrency)
        setToCurrency(fromCurrency)
        setConvertedAmount(amount)
        setAmount(convertedAmount)
    }
    const convert = () => {
        // console.log('clicked',amount * currencyInfo[toCurrency])
        setConvertedAmount(amount * currencyInfo[toCurrency])
    }
    return (
        <div
            className="w-full h-auto flex justify-center items-center p-64
                       bg-gradient-to-r from-orange-300 to-green-100 text-orange-500"
        >
            <div
                className="w-full"
            >
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();

                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                selectedCurrency={fromCurrency}
                                onCurrencyChange={(currency) => setFromCurrency(currency)}
                                onAmountChange={(amount) => setAmount(amount)}
                                currencyOptions={options}

                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5
                                 "
                                onClick={swapCurrencies}

                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                selectedCurrency={toCurrency}
                                onCurrencyChange={(currency) => setToCurrency(currency)}
                                currencyOptions={options}
                                amountDisabled
                            />
                        </div>
                        <button type="submit" className="w-full  text-black px-4 py-3 rounded-lg
                             outline-none bg-gradient-to-r to-orange-300 from-green-300
                     shrink-0 hover:from-orange-400 hover:to-green-400">
                            Convert {fromCurrency} to {toCurrency}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
