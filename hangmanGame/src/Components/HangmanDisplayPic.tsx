import React from 'react'

const HangmanDisplayPic = () => {

    const word = 'test'
  return (
    <div className='picOfHangman'>
        {word.split("").map((letter, index)=> <span>{letter}</span>)}
      
    </div>
  )
}

export default HangmanDisplayPic
