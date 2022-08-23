import React from 'react'
import { COLORS } from '../styles/colors';
import Square from './Square'
import styles from '../styles/Squares.module.css'
import Link from 'next/link';

const Squares = () => {
  return (
    <div className={styles.Squares}>
        <Link href="#catches"><a><Square title='Úlovky' text='Zajímá Vás co se dá našich vodách ulovit?' color={COLORS.white} /></a></Link>
        <Link href="#events"><a><Square title='Akce klubu' text='Jako spolek pořádáme každoročně zajímavé akce' color={COLORS.green} /></a></Link>
        <Link href="#cottage"><a><Square title='Pronájem chaty' text='Možnost pronájmu chalupu v rámci soukromého využití' color={COLORS.blue} /></a></Link>
    </div>
  )
}

export default Squares