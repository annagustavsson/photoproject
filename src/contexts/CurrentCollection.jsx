import React, { useState, useContext} from 'react';
import sofia1 from "../resources/images/sofia/sofia.png"

const CurrentCollectionContext = React.createContext();

export const useCurrentCollection = () => {
    return useContext(CurrentCollectionContext);
  };

const CurrentCollectionContextProvider = ({ children }) => {

    const photoCollections = [
    {
        name: "Vitabergsparken",
        photos: [sofia1, sofia1]},
    {
        name: "Vitabergsparken",
        photos: [sofia1, sofia1]
    }] // ha coverphoto som photos[0]


    const [currentCollection, setCurrentCollection] = useState(null) 

    return (
        <CurrentCollectionContext.Provider
            value={{
            currentCollection: currentCollection, 
            setCurrentCollection: setCurrentCollection,
            }}
      >
        {children}
      </CurrentCollectionContext.Provider>
    )
}

export default CurrentCollectionContextProvider
