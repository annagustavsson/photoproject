import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import {useCurrentCollection} from "../../../contexts/CurrentCollectionContext"
import CoverPage from "../../common/CoverPage/CoverPage"
import CollectionGallery from "../../pages/CollectionGallery/CollectionGallery"


const CollectionPageLayout = () => {

    const {setCollectionByPath, currentCollection} = useCurrentCollection()

    let location = useLocation()

    const currentPhotoCollection = location.pathname

    useEffect(() => {
        setCollectionByPath(currentPhotoCollection) 
        window.scrollTo(0, 0)
    }, [])
    

    return (
        currentCollection &&
        <div>
            <CoverPage coverPhoto={currentCollection.photos[0]} name={currentCollection.name}/>
            <CollectionGallery collection={currentCollection}/>
        </div>
    )
}

export default CollectionPageLayout
