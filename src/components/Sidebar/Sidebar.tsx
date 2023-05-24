import React from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import styles from './Sidebar.module.scss';
import MenuItems from '../../constants/menuItems';
import SignUpButton from '../SignUpButton/SignUpButton';
import LogInButton from '../LogInButton/LogInButton';
import CurrencyCollapse from '../CurrencyCollapse/CurrencyCollapse';

interface SidebarProps {
    isDrawerOpen: boolean;
    activeItem: string;
    handleDrawerToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isDrawerOpen, activeItem, handleDrawerToggle }) => {
    const items = MenuItems.map((item) => {
        const isActive = activeItem === item;

        return (
            <ListItem key={item}>
                <ListItemText primary={item} className={`${isActive ? styles.activeItem : ''}`}/>
            </ListItem>
        );
    });

    return (
        <div className={styles.sidebar}>
            <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerToggle}>
                <div
                    role="presentation"
                    onClick={handleDrawerToggle}
                    onKeyDown={handleDrawerToggle}
                >
                    <IconButton onClick={handleDrawerToggle} style={{color: '#FFF'}}>
                        <Close />
                    </IconButton>

                    <div className={styles.divider}></div>

                    <List className={styles.list}>
                        {items}
                    </List>

                    <CurrencyCollapse />

                    <div className={styles.actions}>
                        <SignUpButton />
                        <LogInButton />
                    </div>
                </div>
            </Drawer>
        </div>
    );
};

export default Sidebar;
