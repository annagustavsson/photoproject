import React from 'react'
import styles from "./sidebar.module.scss"
import SiderbarButton from "../SidebarButton/SiderbarButton"

const Sidebar = () => {
    return (
        <aside className={styles.sidebarContainer}>
            <SiderbarButton event={console.log("hej")} text={"Kungsträdgården"}/>
            <SiderbarButton event={console.log("hej")} text={"Kungsträdgården"}/>
            <SiderbarButton event={console.log("hej")} text={"Kungsträdgården"}/>
        </aside>
    )
}

export default Sidebar
