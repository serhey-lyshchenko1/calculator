import React from 'react';
import { Button } from '@mui/material';
import styles from './CustomButton.module.scss';

interface CustomButtonProps {
    backgroundColor?: string;
    color?: string;
    children: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({
                                                       backgroundColor,
                                                       color,
                                                       children,
                                                       ...rest
                                                   }) => {
    const buttonStyle: React.CSSProperties = {
        backgroundColor,
        color,
    };

    return (
        <Button style={buttonStyle} {...rest} className={styles.customButton}>
            <div className={styles.title}>
                {children}
            </div>
        </Button>
    );
};

export default CustomButton;
