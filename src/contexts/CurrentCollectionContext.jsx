import React, { useState, useContext} from 'react';


import h1 from "../resources/images/hilda/1.png"
import h2 from "../resources/images/hilda/2.png"
import h3 from "../resources/images/hilda/3.png"
import h4 from "../resources/images/hilda/4.png"
import h5 from "../resources/images/hilda/5.png"
import h6 from "../resources/images/hilda/6.png"
import h7 from "../resources/images/hilda/7.png"
import h8 from "../resources/images/hilda/8.png"
import h9 from "../resources/images/hilda/9.png"
import h10 from "../resources/images/hilda/10.png"

import j1 from "../resources/images/jossan/1.png"
import j2 from "../resources/images/jossan/2.png"
import j3 from "../resources/images/jossan/3.png"
import j4 from "../resources/images/jossan/4.png"
import j5 from "../resources/images/jossan/5.png"
import j6 from "../resources/images/jossan/6.png"
import j7 from "../resources/images/jossan/7.png"

import k1 from "../resources/images/kristina/1.png"
import k2 from "../resources/images/kristina/2.png"
import k3 from "../resources/images/kristina/3.png"
import k4 from "../resources/images/kristina/4.png"
import k5 from "../resources/images/kristina/5.png"
import k6 from "../resources/images/kristina/6.png"
import k7 from "../resources/images/kristina/7.png"
import k9 from "../resources/images/kristina/9.png"
import k10 from "../resources/images/kristina/10.png"
import k11 from "../resources/images/kristina/11.png"

import r1 from "../resources/images/rasmus/1.png"
import r2 from "../resources/images/rasmus/2.png"
import r3 from "../resources/images/rasmus/3.png"
import r4 from "../resources/images/rasmus/4.png"
import r5 from "../resources/images/rasmus/5.png"
import r6 from "../resources/images/rasmus/6.png"

import s1 from "../resources/images/sofia/1.png"
import s2 from "../resources/images/sofia/2.png"
import s3 from "../resources/images/sofia/3.png"
import s4 from "../resources/images/sofia/4.png"
import s5 from "../resources/images/sofia/5.png"
import s6 from "../resources/images/sofia/6.png"
import s7 from "../resources/images/sofia/7.png"
import s8 from "../resources/images/sofia/8.png"
import s9 from "../resources/images/sofia/9.png"
import s10 from "../resources/images/sofia/10.png"
import s11 from "../resources/images/sofia/11.png"





const CurrentCollectionContext = React.createContext();

export const useCurrentCollection = () => {
    return useContext(CurrentCollectionContext);
  };

const CurrentCollectionContextProvider = ({ children }) => {

  const [currentCollection, setCurrentCollection] = useState(null) 

  const photoCollections = [
    {
        name: 'Hagaparken',
        photos: [r1, r2, r3, r4, r5, r6],
        colortheme: 'green'
    },
    {
        name: 'Vitabergsparken',
        photos: [s3, s2, s1, s4, s5, s6, s7, s8, s9, s10, s11],
        colortheme: 'beige'
    }, 
    {
        name: 'Kungsträdgården',
        photos: [h9, h2, h3, h4, h5, h6, h7, h8, h1, h10],
        colortheme: 'beige'
    },
    {
        name: 'Vanadislunden',
        photos: [k4, k2, k3, k1, k5, k6, k7, k9, k10, k11],
        colortheme: 'red'
    },
    {
        name: 'NorraDjurgården',
        photos: [j6, j2, j3, j4, j5, j1, j7],
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
