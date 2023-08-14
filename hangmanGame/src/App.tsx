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

  return (
    <div className="App d-flex">
      <div className='text-center winlose'> Lose win</div>
      <HangmanDisplayPic/>
      <HangmanWordSpace/>
      <Alphabet/>
     

    </div>
  )
}

export default App
