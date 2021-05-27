import React from 'react'
import { useHistory } from 'react-router-dom';
import styles from "./imageContainer.module.scss"
import {useCurrentCollection} from "../../../contexts/CurrentCollectionContext"

const ImageContainer = ({coverPhoto, text, collection}) => {
    
    const {setCurrentCollection, currentCollection} = useCurrentCollection()
    let history = useHistory()

    const clickHandler = () => {
        setCurrentCollection(collection)
        history.push('/' + text)
        console.log(currentCollection, "curr")

    }

    return (
        <div onClick={()=> clickHandler()} className={styles.container}>
            <img className={styles.img} src={coverPhoto} alt=''/>
            <div>{text}</div>
        </div>
    )
}

export default ImageContainer
