import React, { useState, useContext} from 'react';
import sofia1 from "../resources/images/sofia/1.png"

const CurrentCollectionContext = React.createContext();

export const useCurrentCollection = () => {
    return useContext(CurrentCollectionContext);
  };

const CurrentCollectionContextProvider = ({ children }) => {

  const [currentCollection, setCurrentCollection] = useState(null) 

  const photoCollections = [
    {
        name: 'Hagaparken',
        photos: [sofia1, sofia1],
        colortheme: 'green'
    },
    {
        name: 'Vitabergsparken',
        photos: [sofia1, sofia1, sofia1, sofia1, sofia1, sofia1],
        colortheme: 'beige'
    }, 
    {
        name: 'Kungsträdgården',
        photos: [sofia1, sofia1],
        colortheme: 'beige'
    },
    {
        name: 'Vanadislunden',
        photos: [sofia1, sofia1],
        colortheme: 'red'
    },
    {
        name: 'NorraDjurgården',
        photos: [sofia1, sofia1],
        colortheme: 'beige'
    }
  ] // ha coverphoto som photos[0]


    const setCollectionByPath = (pathname) => {
      photoCollections.forEach(item => pathname.substring(1) === item.name && setCurrentCollection(item))
    }

    return (
        <CurrentCollectionContext.Provider
            value={{
            currentCollection: currentCollection, 
            setCurrentCollection: setCurrentCollection, //behöver denna ens användas?
            photoCollections: photoCollections,
            setCollectionByPath: setCollectionByPath 
            }}
      >
        {children}
      </CurrentCollectionContext.Provider>
    )
}

export default CurrentCollectionContextProvider
