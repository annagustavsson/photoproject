import React from 'react'
import styles from "./collectionGallery.module.scss"
import ImageContainer from "../../common/ImageContainer/ImageContainer"


const CollectionGallery = ({collection}) => {

    //TODO: Ska man kunna trycka upp en bild i storskärm?

    const column1 = []
    const column2 = []

    const managePhotos = () => {
        for (let i = 0; i < collection.photos.length; i++) {
            if (i % 2 === 0) {
                column2.push(collection.photos[i]);
            }
            else {
                column1.push(collection.photos[i]);
            } 
        }
    }


    return (
        
        <div>
            {managePhotos()}
             <div className={styles.collectionGalleryContainer}>
                 <div className={styles.column1}>
                    {column1.map(image => <ImageContainer photo={image} text={collection.name}/>)}
                 </div>
                 <div className={styles.column2}>
                    {column2.map(image => <ImageContainer photo={image} text={collection.name}/>)}
                 </div>
             </div>
        </div>
    )
}

export default CollectionGallery
