import React, {useState} from 'react'
import styles from "./toggleMenu.module.scss"

const ToggleMenu = () => {
    const [activeButton, setActiveButton] = useState(2)

    const handleClick = (nr) => {
        setActiveButton(nr)
        if (nr === 1) {
            //history.push(/projectinfo)
            console.log("history.push(/projectinfo)")
        }
        else {
             //history.push(/anna)
             console.log("history.push(/anna)")
        }
    }

    return (
        <div className={styles.toggleContainer}>
            <div onClick={()=>handleClick(1)} className={styles.toggleButton}><div className={activeButton === 1 && styles.active}>About this project</div></div>
            <div onClick={()=>handleClick(2)} className={styles.toggleButton}><div className={activeButton === 2 && styles.active}>About me</div></div>
            {/* <div className={location.pathname === "/" ? activeStyles : unActiveStyle}><ToggleButton  onClick={() => history.push("/")} text={"About"}/></div>
            <div className={location.pathname === "/projects" ? activeStyles : unActiveStyle}><ToggleButton  onClick={() => history.push("/projects")} text={"Projects"} /></div> */}
        </div>
    )
}

export default ToggleMenu
