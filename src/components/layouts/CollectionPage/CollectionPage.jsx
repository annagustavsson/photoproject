import React, {useEffect} from 'react'
import CoverPage from "../../common/CoverPage/CoverPage"
import { useLocation } from 'react-router-dom';
import {useCurrentCollection} from "../../../contexts/CurrentCollectionContext"

const CollectionPage = () => {

    const {setCollectionByPath, currentCollection} = useCurrentCollection()

    let location = useLocation()

    const currentPhotoCollection = location.pathname

    useEffect(() => {
        setCollectionByPath(currentPhotoCollection) 
    }, [])
    

    return (
        currentCollection &&
        <div>
            <CoverPage coverPhoto={currentCollection.photos[0]}/>
        </div>
    )
}

export default CollectionPage
