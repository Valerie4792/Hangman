import React from 'react'

interface btnClickedProps{
    onBtnClick: (letter:string) => void
    guessedLtr: string[]
}
const alphabetLetters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
    'u', 'v', 'w', 'x', 'y', 'z'
  ];

  

const Alphabet = ({onBtnClick, guessedLtr}:btnClickedProps) => {

  return (
    <div className='alphabetKeys'>
        {alphabetLetters.map(alphabetLtrs => {

            const isActive = !guessedLtr.includes(alphabetLtrs);

            return(
                <button
                type="button"
                className={`btn btn-dark my-2 ${isActive ? 'inactive' : ''}`}
                onClick={() => isActive && onBtnClick(alphabetLtrs)}
                key={alphabetLtrs}
                disabled={!isActive}
              >{alphabetLtrs}</button>
            )

        })}
      
    </div>
  )
}

export default Alphabet
