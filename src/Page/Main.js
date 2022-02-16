import React from 'react'
import CharacterItem from './CharacterItem'
const Main = () => {
    return (
        <div>
            <span className = 'namee'>KNOW THE CHARACTERS-</span>
            <br/>
            <br/>
        <div className = "cardItem" > 
      
          <CharacterItem  it={1}></CharacterItem>
          <CharacterItem  it={2}></CharacterItem>
          <CharacterItem  it={3}></CharacterItem>
          <CharacterItem  it={4}></CharacterItem>
          <CharacterItem  it={5}></CharacterItem>
          <CharacterItem  it={6}></CharacterItem>
          <CharacterItem  it={7}></CharacterItem>
          
          <CharacterItem  it={9}></CharacterItem>
        
          <CharacterItem  it={11}></CharacterItem>
          <CharacterItem  it={12}></CharacterItem>
          <CharacterItem  it={13}></CharacterItem>
          <CharacterItem  it={14}></CharacterItem>
         
          <CharacterItem  it={16}></CharacterItem>
          <CharacterItem  it={17}></CharacterItem>
          
          <CharacterItem  it={19}></CharacterItem>
          <CharacterItem  it={20}></CharacterItem>
         
         
          <CharacterItem  it={23}></CharacterItem>
         </div>
          
       </div>
    )
}

export default Main
