import React from 'react';
import styles from "./MyButton.module.scss"
const MyButton = (props) => {
    return (
        <button
            onClick={props.onClick}
            className={styles.myButton}

        >
            {props.children}
        </button>
    );
};

export default MyButton;