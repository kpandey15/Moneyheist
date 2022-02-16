import React from 'react'
import { useState } from 'react'
import axios from 'axios' 

const CharacterItem = ({it}) => {
  
    const [item, setitem] = useState([])
      
        async function fetchData() {
         try {
            const result = await axios.get(`https://projectheist.herokuapp.com/characters/${it}`)
          setitem(result.data)
        
            }  catch (error) {
             console.error(error);
           }
            }
            fetchData()
          
     
    return (
  
       <div className='card'>
        <div className='desc'><p>Name : {item.name} <br/>Alias : {item.alias} <br/>Played by : {item.played_by}</p></div>
        <div className='filter'></div>
        <div className='top'></div>
        <div className='right'></div>
        <div className='bottom'></div>
        <div className='left'></div>
      <img src = {item.image} alt = ''/>
       </div>
    
    )
}



export default CharacterItem
