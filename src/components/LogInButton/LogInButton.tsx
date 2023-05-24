import React from 'react';
import CustomButton from '../UI/CustomButton/CustomButton';
import styles from './LogInButton.module.scss';

const LogInButton: React.FC = () => {
    return (
        <div className={styles.logIn}>
            <CustomButton backgroundColor="#E9B109" color="#142241">
                Log In
            </CustomButton>
        </div>
    );
};

export default LogInButton;
