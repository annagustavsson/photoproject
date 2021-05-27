import React from 'react'
//import {useCurrentCollection} from "../../../contexts/CurrentCollectionContext"
import styles from "../CoverPage/coverPage.module.scss"

const Coverpage = ({coverPhoto, name}) => {
    
    let colortheme = null
    switch (name) {
        case 'Hagaparken':
            colortheme = styles.green;
            break;
        case 'Vitabergsparken':
            colortheme = styles.beige;
            break;
        case 'Kungsträdgården':
            colortheme = styles.beige
            break;
        case 'Vanadislunden':
            colortheme = styles.red
            break;
        case 'NorraDjurgården':
            colortheme = styles.beige;
            break;

    }

    console.log(colortheme, "colortheme")


    return (
        <div className={[styles.container, colortheme].join(" ")}>
            <div className={styles.rightBox}>
                <img className={styles.img} src={coverPhoto} alt=''/>
            </div> 
        </div>
    )
}

export default Coverpage
