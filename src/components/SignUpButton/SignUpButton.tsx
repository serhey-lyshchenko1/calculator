import React from 'react';
import CustomButton from '../UI/CustomButton/CustomButton';
import styles from './SignUpButton.module.scss';

const SignUpButton: React.FC = () => {
    return (
        <div className={styles.signUp}>
            <CustomButton backgroundColor="transparent" color="#FFFFFF">
                Sign Up
            </CustomButton>
        </div>
    );
};

export default SignUpButton;