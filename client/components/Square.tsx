import React from 'react';
import { COLORS } from '../styles/colors';
import styles from '../styles/Squares.module.css'

type Props = {
    title: string;
    text: string;
    color: string;
}

const Square = ({title, text, color}: Props) => {
    let titleColor = COLORS.blue;
    let textColor = COLORS.greyText;
    if (color === COLORS.blue) {
        titleColor = COLORS.white;
        textColor = COLORS.white;
    }else if (color === COLORS.green) {
        textColor = COLORS.blue;
    }
    return (
        <button type='button' style={{backgroundColor: color}} className={`${styles.SquareButton} ${styles.scale_up_center}`}>
            <div className={styles.SquareDiv}>
                <h3 style={{color: titleColor}}>{title}</h3>
                <p style={{color: textColor}}>{text}</p>
                <p style={{color: titleColor}}>Zjistit více</p>
            </div>
        </button>
    );
}
 
export default Square;