import React from 'react'
import styles from "./mainGallery.module.scss"
import Sidebar from "../../common/Sidebar/Sidebar"
import ImageContainer from "../../common/ImageContainer/ImageContainer"
import {useCurrentCollection} from "../../../contexts/CurrentCollectionContext"


// TODO: render-funktion över objekt med bilderna och texten

const MainGallery = () => {

    const {photoCollections} = useCurrentCollection()

    //TODO - snabba inläsningen av bilderna
    // Ej optimalt med for-lopp och 2 st + bilderna är stora filer --> fixa snygg lösning

    const column1 = []
    const column2 = []
    const managePhotos = () => {
        for (let i = 0; i < photoCollections.length; i++) {
            if (i % 2 === 0) {
                column1.push(photoCollections[i]);
            }
            else {
                column2.push(photoCollections[i]);
            } 
        }
    }

    return ( 
        <>
        {managePhotos()}
        <Sidebar/>
        <div className={styles.mainGalleryContainer}>
            <div className={styles.column1}>
                {column1.map(item=> 
                <ImageContainer key={item.name} photo={item.photos[0]} text={item.name} collection={item}/>)}
            </div>
            <div className={styles.column2}>
                {column2.map(item=> 
                <ImageContainer key={item.name} photo={item.photos[0]} text={item.name} collection={item}/>)} 
            </div>
        </div>
        </>
    )
}

export default MainGallery
