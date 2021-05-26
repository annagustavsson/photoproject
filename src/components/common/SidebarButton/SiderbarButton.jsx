import React from 'react'
import styles from "../SidebarButton/sidebarButton.module.scss"

const SiderbarButton = ({event, text}) => {
    return (
        <button onClick={event} className={styles.button}>
            {text}
        </button>
    )
}

export default SiderbarButton
