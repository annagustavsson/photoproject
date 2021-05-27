import React from 'react'
//import {useCurrentCollection} from "../../../contexts/CurrentCollectionContext"
import styles from "../CoverPage/coverPage.module.scss"

const Coverpage = ({coverPhoto}) => {

    return (
        <div className={styles.colortheme}>
            <img src={coverPhoto} alt=''/>
        </div>
    )
}

export default Coverpage
