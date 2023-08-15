import React from 'react'

interface btnClickedProps{
    onBtnClick: () => void
}
const alphabetLetters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
    'u', 'v', 'w', 'x', 'y', 'z'
  ];

  

const Alphabet = ({onBtnClick}:btnClickedProps) => {

  return (
    <div className='alphabetKeys'>
        {alphabetLetters.map(alphabetLtrs => {
            return(
                <button type="button" className=" inactive btn btn-dark my-5" onClick={onBtnClick} key={alphabetLtrs}>{alphabetLtrs}</button>
            )

        })}
      
    </div>
  )
}

export default Alphabet
