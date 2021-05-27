import React from 'react'
import styles from "./mainGallery.module.scss"
import Sidebar from "../../common/Sidebar/Sidebar"
import ImageContainer from "../../common/ImageContainer/ImageContainer"
import {useCurrentCollection} from "../../../contexts/CurrentCollectionContext"
import sofia1 from "../../../resources/images/sofia/1.png"


// TODO: render-funktion över objekt med bilderna och texten

const MainGallery = () => {

    const {photoCollections} = useCurrentCollection()

    // const photoCollections = [ // TODO: ha i context istället
    //     {
    //         name: 'Hagaparken',
    //         photos: [sofia1, sofia1],
    //         colortheme: 'green'
    //     },
    //     {
    //         name: 'Vitabergsparken',
    //         photos: [sofia1, sofia1],
    //         colortheme: 'beige'
    //     }, 
    //     {
    //         name: 'Kungsträdgården',
    //         photos: [sofia1, sofia1],
    //         colortheme: 'beige'
    //     },
    //     {
    //         name: 'Vanadislunden',
    //         photos: [sofia1, sofia1],
    //         colortheme: 'red'
    //     },
    //     {
    //         name: 'NorraDjurgården',
    //         photos: [sofia1, sofia1],
    //         colortheme: 'beige'
    //     }
    //   ] // ha coverphoto som photos[0]
    


    return (
        <>
        <Sidebar/>
        <div className={styles.imageGalleryContainer}>
            {photoCollections.map(item=> 
            <ImageContainer key={item.name} coverPhoto={item.photos[0]} text={item.name} collection={item}/>)}
        </div>
        </>
    )
}

export default MainGallery
