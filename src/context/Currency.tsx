import React, { createContext, useState } from 'react';

interface CurrencyProviderProps {
    children: React.ReactNode;
}

interface CurrencyContextProps {
    selectedCurrency: string;
    setSelectedCurrency: (currency: string) => void;
}

const Currency = createContext<CurrencyContextProps>({
    selectedCurrency: 'USD',
    setSelectedCurrency: () => {},
});

const CurrencyProvider: React.FC<CurrencyProviderProps> = ({ children }) => {
    const [selectedCurrency, setSelectedCurrency] = useState<string>('USD');

    const handleSetSelectedCurrency = (currency: string) => {
        setSelectedCurrency(currency);
    };

    const contextValue: CurrencyContextProps = {
        selectedCurrency,
        setSelectedCurrency: handleSetSelectedCurrency,
    };

    return (
        <Currency.Provider value={contextValue}>{children}</Currency.Provider>
    );
};

export { Currency, CurrencyProvider };
