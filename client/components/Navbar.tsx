import { useState } from "react";
import Image from 'next/image'
import Link from "next/link";
import {RiMenu3Line, RiCloseLine} from "react-icons/ri";
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
      <div className={styles.Navbar}>
        <div className={styles.Logo}>
          <Image src="/images/logo.svg" alt="Logo - Klub sportovních rybářů Kněžice" width={80} height={83.36} />
          <div className={styles.LogoText}>
              <h3>Klub sportovních</h3>
              <h3>rybářů Kněžice</h3>
          </div>
        </div>  
        <div className={styles.Menu}>
        {/* <h3><a href="#home"><img src={home} alt="home" /></a></h3> */}
          <h3><a href="#oklubu">O klubu</a></h3>
          <h3><a href="#ulovky">Úlovky</a></h3>
          <h3><a href="#udalosti">Události</a></h3>
          <h3><Link href="/zavody"><a>Závody</a></Link></h3> {/* Pokud je použit Link --> dochází k přenačtení z DB*/}
          <h3><a href="#procleny">Pro členy</a></h3>
          <h3><a href="#kontakty">Kontakty</a></h3>
        </div>
        <div className={styles.MenuMobile}>
          {toggleMenu
            ? <RiCloseLine color="#FFF" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#FFF" size={27} onClick={() => setToggleMenu(true)} />}
          {toggleMenu && (
          <div className={`${styles.MenuMobileContainer} ${styles.slideRight}`}>
            <div className={styles.Logo}>
              <Image src="/images/logo.svg" alt="Logo - Klub sportovních rybářů Kněžice" width={50} height={50} />
              <div className={styles.LogoText}>
                  <h3>Klub sportovních</h3>
                  <h3>rybářů Kněžice</h3>
              </div>
            </div>
            <div className={styles.MenuMobileText}>
              <h3><a href="#oklubu" onClick={() => setToggleMenu(false)}>O klubu</a></h3>
              <h3><a href="#ulovky" onClick={() => setToggleMenu(false)}>Úlovky</a></h3>
              <h3><a href="#udalosti" onClick={() => setToggleMenu(false)}>Události</a></h3>
              <h3><Link href="/zavody" onClick={() => setToggleMenu(false)}><a>Závody</a></Link></h3>
              <h3><a href="#procleny" onClick={() => setToggleMenu(false)}>Pro členy</a></h3>
              <h3><a href="#kontakty" onClick={() => setToggleMenu(false)}>Kontakty</a></h3>
            </div>
          </div>
          )}
        </div>
      </div>
    )
}

export default Navbar