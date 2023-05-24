import React, { useContext, useState } from 'react';
import List from '@mui/material/List';
import { MenuItem, ListItemButton, Collapse } from '@mui/material';
import Currency from '../../constants/currency';
import styles from './CurrencyCollapse.module.scss';
import { Currency as CurrencyContext } from '../../context/Currency';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import ICurrency from '../../type/currency.dto';

const CurrencyCollapse: React.FC = () => {
    const {selectedCurrency, setSelectedCurrency} = useContext(CurrencyContext);
    const [open, setOpen] = useState(true);

    const handleClick = (event: any): void => {
        event.preventDefault();
        event.stopPropagation();
        setOpen(!open);
    };

    const handleSelect = (event: any, title: string) => {
        event.preventDefault();
        event.stopPropagation();
        setSelectedCurrency(title);
    };

    const currencyList = Currency.map(({title, icon}: { title: string, icon: string }) => {
        return (
            <MenuItem key={title} value={title} style={{color: 'white'}}
                      onClick={(event) => handleSelect(event, title)}>
                <img src={require(`../../assets/${icon}.svg`)} alt="currency" className={styles.currencyIcon}/>
                {title}
            </MenuItem>
        );
    });

    const currentCurrency: ICurrency | undefined = Currency.find((currency) => currency.title === selectedCurrency);

    return (
        <div className={styles.currencyCollapse}>
            <List
                sx={{width: '100%', maxWidth: 360, bgcolor: '#142241', color: 'white'}}
                component="nav"
            >
                <ListItemButton onClick={handleClick} className={styles.selectedCurrency}>
                    <MenuItem key={selectedCurrency} value={selectedCurrency} style={{color: 'white', paddingLeft: 0}}>
                        {
                            currentCurrency && currentCurrency.icon ?
                                <img src={require(`../../assets/${currentCurrency.icon}.svg`)} alt="currency"
                                     className={styles.currencyIcon}/> :
                                null
                        }
                        {selectedCurrency}
                    </MenuItem>
                    {open ? <ExpandLess/> : <ExpandMore/>}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    {currencyList}
                </Collapse>
            </List>
            <div className={styles.divider}></div>
        </div>
    );
};

export default CurrencyCollapse;
