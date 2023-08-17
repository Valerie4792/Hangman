import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import words from './wordList.json'
import HangmanDisplayPic from './Components/HangmanDisplayPic'
import HangmanWordSpace from './Components/HangmanWordSpace'
import Alphabet from './Components/Alphabet'
import  { hangmanBGImages } from './Components/HangmanDisplayPic';
//imported json file

function App() {
 
  const [wordGuessing, setwordGuessing] = useState(()=>{
    //this will give a random word from our json file of words List
    return words[Math.floor(Math.random() * words.length)]
 
  })

  //need to store letters that have guessed. will need a useState
  const [guessedLtr, setGuessedLtr] = useState<string[]>([]);
  const wrongGuess = guessedLtr.filter( ltr => !wordGuessing.includes(ltr))
  const maxWrongGuesses = hangmanBGImages.length - 1; // Maximum number of incorrect guesses before using the last image
  const backgroundIndex = Math.min(wrongGuess.length, maxWrongGuesses);

  useEffect(() => {
    document.body.style.backgroundImage = `url(${hangmanBGImages[backgroundIndex]})`;
    return () => {
     
      document.body.style.backgroundImage = '';
    };
  }, [backgroundIndex]);


 

//need to add logic to turn letter inactive after clicked
  const BtnLetterClicked = (letter: string) =>{
    setGuessedLtr((prevGuessedLtr) => [...prevGuessedLtr, letter]);
  }

  return (
    <div className="App">
      <div className="row justify-content-center winlose">
      <h2> Lose win</h2>
      </div>

    <div className="row">
      <div className="col">
        <HangmanDisplayPic tries={wrongGuess.length}/>
{/* will need to add logic to change background pic depending on number of guesses wrong */}
      </div>
    </div>
    <div className="row">
      <div className="col">
        <HangmanWordSpace guessedLtr={guessedLtr} wordGuessing={wordGuessing}/>
      </div>
    </div>
    <div>
      <div className="alphabetLtrs">

        <Alphabet onBtnClick={BtnLetterClicked} guessedLtr ={guessedLtr}/>
      </div>
    </div>

      

      
      
      
     
     

    </div>
  )
}

export default App
