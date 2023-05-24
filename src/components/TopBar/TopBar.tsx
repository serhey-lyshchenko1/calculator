import React from 'react';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './TopBar.module.scss';
import MenuItems from '../../constants/menuItems';
import logo from '../../assets/logo.svg';
import CurrencyList from '../CurrencyList/CurrencyList';
import SignUpButton from '../SignUpButton/SignUpButton';
import LogInButton from '../LogInButton/LogInButton';

interface TopBarProps {
    activeItem: string;
    handleDrawerToggle: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ handleDrawerToggle, activeItem }) => {
    const items = MenuItems.map((item: string, index: number) => {
        const isActive = item === activeItem;

        return (
            <div className={styles.item} key={index}>
                <div className={styles.text}>
                    {item}
                </div>
                {isActive ? <div className={styles.underLine}></div> : null}
            </div>
        );
    });

    return (
        <div className={styles.topBar}>
            <AppBar position="static" className={styles.appBar}>
                <Toolbar className={styles.toolbar}>
                    <div className={styles.main}>
                        <IconButton
                            edge="start"
                            className={styles.menuButton}
                            color="inherit"
                            aria-label="menu"
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                        <img src={logo} alt="Logo" className={styles.logo} />

                        <div className={styles.list}>
                            {items}
                        </div>
                    </div>

                    <div className={styles.actions}>
                        <div className={styles.currencyListWrapper}>
                            <CurrencyList />
                        </div>
                        <div className={styles.signUpWrapper}>
                            <SignUpButton />
                        </div>
                        <LogInButton />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default TopBar;
