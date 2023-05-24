import React, { useState } from 'react';
import styles from './Bar.module.scss';
import Sidebar from '../Sidebar/Sidebar';
import TopBar from '../TopBar/TopBar';

const Bar = () => {
    const activeItem: string = 'RS3 Gold';
    const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!isDrawerOpen);
    };

    return (
        <div className={styles.header}>
            <TopBar handleDrawerToggle={handleDrawerToggle}
                    activeItem={activeItem}/>

            <Sidebar isDrawerOpen={isDrawerOpen}
                     activeItem={activeItem}
                     handleDrawerToggle={handleDrawerToggle} />
        </div>
    );
};

export default Bar;
