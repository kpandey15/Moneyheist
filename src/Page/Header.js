import React from 'react'
import download from '../image/download.jpg'
import download1 from '../image/download1.jpg'
const Header = () => {
    return (
        <div className = 'center'>
            <img className='headImg' src = {download} alt = '' />
            <img className = 'img2' src = {download1} alt =''/>
            
        </div>
    )
}

export default Header