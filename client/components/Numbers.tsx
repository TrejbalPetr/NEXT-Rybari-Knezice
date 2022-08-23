import React from 'react'
import Number from "./Number"
import styles from '../styles/Numbers.module.css'

const Numbers = () => {
  return (
    <div className={styles.Numbers}>
      <Number text='Klub založen' num={2008}/>
      <Number text='Rybníků ve správě' num={8}/>
      <Number text='Aktivních členů' num={31}/>
      <Number text='Druhů ryb v našich vodách' num={22}/>
    </div>
  )
}

export default Numbers