import React from 'react'
import styles from "./imageContainer.module.scss"

const ImageContainer = ({picture, text}) => {
    return (
        <div className={styles.container}>
            <img className={styles.img} src={picture}/>
            <div>{text}</div>
        </div>
    )
}

export default ImageContainer
