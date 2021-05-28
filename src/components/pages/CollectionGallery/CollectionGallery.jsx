import React from 'react'
import styles from "./collectionGallery.module.scss"
import ImageContainer from "../../common/ImageContainer/ImageContainer"


const CollectionGallery = ({collection}) => {

    //TODO: Ska man kunna trycka upp en bild i storskärm?

    return (
        <div>
             <div className={styles.collectionGalleryContainer}>
                 {collection.photos.map(image => <ImageContainer photo={image} text={collection.name}/>)}
             </div>
        </div>
    )
}

export default CollectionGallery
