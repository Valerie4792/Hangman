import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import words from './wordList.json'
import HangmanDisplayPic from './Components/HangmanDisplayPic'
import HangmanWordSpace from './Components/HangmanWordSpace'
import Alphabet from './Components/Alphabet'
//imported json file

function App() {
 
  const [wordGuessing, setwordGuessing] = useState(()=>{
    //this will give a random word from our json file of words List
    return words[Math.floor(Math.random() * words.length)]
  })

  //need to store letters that have guessed. will need a useState
  const [guessedLtr, setGuessedLtr] = useState<string[]>([]);
  const wrongGuess = guessedLtr.filter( ltr => !wordGuessing.includes(ltr))


  // const btnClicked = false;

//need to add logic to turn letter inactive
  const BtnLetterClicked = () =>{
    
   

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
        <HangmanWordSpace/>
      </div>
    </div>
    <div className="row">
      <div className="col" style={{alignSelf:'stretch'}}>

        <Alphabet onBtnClick={BtnLetterClicked}/>
      </div>
    </div>

      

      
      
      
     
     

    </div>
  )
}

export default App
