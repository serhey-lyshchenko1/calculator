import React, {useState} from 'react';
import './App.module.scss';
import Bar from './components/Bar/Bar';
import Calculator from './components/Calculator/Calculator';
import { CurrencyProvider } from './context/Currency';

function App() {
    const [amount, setAmount] = useState<number>(12);
    const onUpdateAmount = (amount: string) => {
        setAmount(Number(amount));
    };

    return (
        <div className="App">
            <CurrencyProvider>
                <Bar/>
                <Calculator amount={amount} updateAmount={onUpdateAmount}/>
            </CurrencyProvider>
        </div>
    );
}

export default App;
