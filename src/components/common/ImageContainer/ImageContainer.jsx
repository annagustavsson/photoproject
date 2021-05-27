import React from 'react'
import { useHistory } from 'react-router-dom';
import styles from "./imageContainer.module.scss"
import {useCurrentCollection} from "../../../contexts/CurrentCollectionContext"

const ImageContainer = ({photo, text}) => {
    
    let history = useHistory()

    const clickHandler = () => {
        history.push('/' + text)
    }

    return (
        <div onClick={()=> clickHandler()} className={styles.container}>
            <img className={styles.img} src={photo} alt=''/>
            {text && <div>{text}</div>}
        </div>
    )
}

export default ImageContainer
