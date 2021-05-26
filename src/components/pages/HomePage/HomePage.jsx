import React from 'react'
import styles from "./homePage.module.scss"
import sofia1 from "../../../resources/images/sofia/1.png"

import ToggleMenu from "../../common/toggleMenu/ToggleMenu"

const HomePage = () => {
    return (
        <div className={styles.pageContainer}>
             <div className={styles.toggleMenuContainer}>
                 <ToggleMenu/>
             </div>
            <div className={styles.title}>
                <p className={styles.heading1}>Stockholms urban greenspaces</p>
                <p className={styles.heading2}>- and the people in them</p>
            </div>
            <img className={styles.image} src={sofia1} alt="Sofia 1"/>
        </div>
    )
}

export default HomePage
