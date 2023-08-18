import React from 'react'

export interface btnClickedProps{
    onBtnClick: (letter:string) => void
    guessedLtr: string[]
    disabled: boolean;
}
const alphabetLetters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
    'u', 'v', 'w', 'x', 'y', 'z'
  ];

  

const Alphabet = ({onBtnClick, guessedLtr, disabled}:btnClickedProps) => {

   
  return (
    <div className='alphabetKeys'>
        {alphabetLetters.map(alphabetLtrs => {

            const isActive = !guessedLtr.includes(alphabetLtrs);

            return(
                <button
                type="button"
                className={`btn btn-dark my-2 ${isActive ? 'inactive' : ''}`}
                onClick={() => !disabled && isActive && onBtnClick(alphabetLtrs)}
                key={alphabetLtrs}
                disabled={!isActive || disabled}
              >{alphabetLtrs}</button>
            )

        })}
      
    </div>
  )
}

export default Alphabet
