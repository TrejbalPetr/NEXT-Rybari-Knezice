import React from 'react';
import CountUp from 'react-countup';
import styles from '../styles/Numbers.module.css'

type Props = {
    num: number;
    text: string;
}

const Number = ({num, text}: Props) => {

    return (
        <div className={styles.Number}>
            <CountUp start={0} end={num} enableScrollSpy>
            {({ countUpRef}) => (
                <h2><span ref={countUpRef} /></h2>
            )}
            </CountUp>
            <p>{text}</p>
        </div>
    );
}
 
export default Number;