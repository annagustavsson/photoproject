import React from 'react'
import styles from "./mainGallery.module.scss"
import Sidebar from "../../common/Sidebar/Sidebar"
import ImageContainer from "../../common/ImageContainer/ImageContainer"
import {useCurrentCollection} from "../../../contexts/CurrentCollectionContext"
import sofia1 from "../../../resources/images/sofia/1.png"


// TODO: render-funktion över objekt med bilderna och texten

const MainGallery = () => {

    const {photoCollections} = useCurrentCollection()

    return (
        <>
        <Sidebar/>
        <div className={styles.mainGalleryContainer}>
            {photoCollections.map(item=> 
            <ImageContainer key={item.name} photo={item.photos[0]} text={item.name} collection={item}/>)}
        </div>
        </>
    )
}

export default MainGallery
