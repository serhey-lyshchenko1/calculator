import React, { useState, useEffect, useContext, ChangeEvent } from 'react';
import { TextField } from '@mui/material';
import styles from './Calculator.module.scss';
import Currency from '../../constants/currency';
import { Currency as CurrencyContext } from '../../context/Currency';
import ICurrency from '../../type/currency.dto';

interface CalculatorProps {
    amount: number;
    updateAmount: (value: string) => void;
}

const DEFAULT_ITEM_PRICE: number = 10;

const Calculator: React.FC<CalculatorProps> = ({amount, updateAmount}) => {
    const {selectedCurrency} = useContext(CurrencyContext);
    const [price, setPrice] = useState<string>('0');

    const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
        updateAmount(e.target.value);
    };

    useEffect(() => {
        const currentCurrency: ICurrency | undefined = Currency.find((currency) => currency.title === selectedCurrency);

        if (currentCurrency) {
            const price = Number(amount * DEFAULT_ITEM_PRICE * currentCurrency.priceCoefficient).toFixed(2);
            setPrice(() => price);
        }
    }, [amount, selectedCurrency]);


    return (
        <div className={styles.calculator}>
            <TextField label="Amount" value={amount} onChange={handleAmountChange} className={styles.amount}/>
            <TextField label="Price" value={price} disabled/>
        </div>
    );
};

export default Calculator;
