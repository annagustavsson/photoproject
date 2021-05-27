import React from 'react'

const Coverpage = ({img, colortheme}) => {
    return (
        <div className={StyleSheet.colortheme}>
            <img src={img}/>
        </div>
    )
}

export default Coverpage
