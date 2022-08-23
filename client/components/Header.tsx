import React, { useState } from 'react'
import styles from '../styles/Header.module.css'
import Image from 'next/image'

import {useQuery, gql} from "@apollo/client"

const GET_MAINDATA = gql`
    query getMainData {
        getMainData {
            title
            subtitle
            lastChange
        }
    }
`;

function Header() {

  //QUERY
  const { loading, error, data } = useQuery(GET_MAINDATA);

  if(loading) return <div>Spinner...</div>;
  if(error) return <div>Ajaj někde se stala chyba...</div>;
  console.log("Data:")
  console.log({error, loading, data});

  //POPUP
//   const [popup, setPopup] = useState(false);

  const togglePopup = () => {
    // setPopup(!popup);
  };

//   if(popup) {
//     document.body.classList.add('active-modal')
//   } else {
//     document.body.classList.remove('active-modal')
//   }


  return (
    <div className={styles.MainHeader}>
      <div className={styles.Intro}>
        <div className={styles.Header}>
          <h1>{data.getMainData.title}</h1>
          <p>{data.getMainData.subtitle}</p>
          <div>
            <button type='button' className="BtnTransparent"><a href="#chalupa">Chalupa</a></button>
            <button type='button' className="BtnGreen" onClick={togglePopup}>Povolenky</button>
          </div>
        </div>
      </div>
      {/* {popup && (
        <div className={styles.modal}>
          <div onClick={togglePopup} className={styles.overlay}></div>
          <div className={styles.modalContent}>
            <h2>Prodej povolenek</h2>
            <p>
              V současné době <strong>není</strong> možné si zakoupit povolenku na Osecký rybník. Po usnesení členů klubu došlo k uzavření rybníka pouze pro členy, přičemž každý člen se může "zaručit"
              za dvě osoby, které si mohou povolenku zakoupit. Další možností jak si u nás zarybařit je zúčastnit se rybářských závodů (přehled konaných akcí naleznete níže na stránce). 
            </p>
            <button className={styles.closeModal} onClick={togglePopup}>
              <Image src="/images/Close.svg" alt="Close button" width={20} height={20} />
            </button>
          </div>
        </div>
      )} */}
    </div>
  )
}

export default Header;