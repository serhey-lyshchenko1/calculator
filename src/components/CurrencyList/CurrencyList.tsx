import React, { useState, useContext } from 'react';
import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import Currency from '../../constants/currency';
import styles from './CurrencyList.module.scss';
import { Currency as CurrencyContext } from '../../context/Currency';
import { ExpandMore, ExpandLess } from '@mui/icons-material';

const CurrencyList: React.FC = () => {
    const [open, setOpen] = useState(false);
    const { selectedCurrency, setSelectedCurrency } = useContext(CurrencyContext);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event: SelectChangeEvent<string>) => {
        const value = event.target.value;
        setSelectedCurrency(value);
    };

    const currencyList = Currency.map(({title, icon}: {title: string, icon: string}) => {
        return (
            <MenuItem key={title} value={title} style={{ color: 'white' }}>
                <img src={require(`../../assets/${icon}.svg`)} alt="currency" className={styles.currencyIcon}/>
                {title}
            </MenuItem>
        );
    });

    return (
        <FormControl className={styles.currencyList}>
            <Select
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                onChange={handleChange}
                IconComponent={() => open ? <ExpandLess onClick={handleClose}/> : <ExpandMore onClick={handleOpen} />}
                labelId="currency-label"
                id="currency-dropdown"
                value={selectedCurrency}
                style={{ color: 'white', cursor: 'pointer' }}
                MenuProps={{
                    MenuListProps: { style: { background: '#142241', width: '105px' } }
                }}
            >
                {currencyList}
            </Select>
        </FormControl>
    );
};

export default CurrencyList;
