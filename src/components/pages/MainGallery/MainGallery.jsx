import React from 'react'
import styles from "./mainGallery.module.scss"
import Sidebar from "../../common/Sidebar/Sidebar"
import ImageContainer from "../../common/ImageContainer/ImageContainer"
import sofia from "../../../resources/images/sofia/1.png"


// TODO: render-funktion över objekt med bilderna och texten

const MainGallery = () => {
    return (
        <>
        <Sidebar/>
        <div className={styles.imageGalleryContainer}>
            <ImageContainer picture={sofia}/>
            <ImageContainer picture={sofia}/>
            <ImageContainer picture={sofia}/>
            <ImageContainer picture={sofia}/>
            <ImageContainer picture={sofia}/>
        </div>
        </>
    )
}

export default MainGallery
