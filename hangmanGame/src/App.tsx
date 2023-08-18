import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import words from "./wordList.json";
import HangmanDisplayPic from "./Components/HangmanDisplayPic";
import HangmanWordSpace from "./Components/HangmanWordSpace";
import Alphabet from "./Components/Alphabet";
import { hangmanBGImages } from "./Components/HangmanDisplayPic";
import pauseButtonImage from "./assets/pauseImage.png";
import playButtonImage from "./assets/playImage.png";

function App() {
  const [wordGuessing, setWordGuessing] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLtr, setGuessedLtr] = useState<string[]>([]);
  const [sound, setSound] = useState(50); // Initial volume state
  const [isAutoplay, setIsAutoplay] = useState(true);
  const wrongGuess = guessedLtr.filter((ltr) => !wordGuessing.includes(ltr));
  const maxWrongGuesses = hangmanBGImages.length - 1;
  const backgroundIndex = Math.min(wrongGuess.length, maxWrongGuesses);

  const loser = wrongGuess.length >= 6;
  const winner = wordGuessing
    .split("")
    .every((ltr) => guessedLtr.includes(ltr));

  const audioRef = useRef<HTMLAudioElement | null>(null);
  useEffect(() => {
    document.body.style.backgroundImage = `url(${hangmanBGImages[backgroundIndex]})`;
    return () => {
      document.body.style.backgroundImage = "";
    };
  }, [backgroundIndex]);
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = sound / 100; // Convert range 1-100 to 0-1
      if (isAutoplay) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [sound, isAutoplay]);

  const handlePlayPause = () => {
    setIsAutoplay(!isAutoplay);
  };

  const BtnLetterClicked = (letter: string) => {
    setGuessedLtr((prevGuessedLtr) => [...prevGuessedLtr, letter]);
  };

  return (
    <div className="App">
      {/* for audio element/play/pause sound */}
      <audio ref={audioRef} autoPlay={isAutoplay} loop src="/audio/JPT.mp3" />

      <div onClick={handlePlayPause} className="play-pause-button">
        <img
          className="playPauseImageSize mx-4 my-2"
          src={isAutoplay ? pauseButtonImage : playButtonImage}
          alt={isAutoplay ? "Pause" : "Play"}
        />
      </div>
      <input
        type="range"
        min="1"
        max="100"
        value={sound}
        className="slider mx-3"
        id="myRange"
        onChange={(e) => setSound(Number(e.target.value))}
      />
      <p className="volume mx-3">Volume: {sound}</p>
      
      <div className="row winlose">

        <h2 className="displayTitle my-5 text-center">
          {winner ? (
            <>
              You Won! The Dino has survived extinction! {" "}
              <div className="row">
                <div className="col">
                  <button
                    className="btn btn-success"
                    onClick={() => window.location.reload()}
                  >
                    Play Again?
                  </button>
                </div>
              </div>
            </>
          ) : loser ? (
            <>
              You Lose! The dino has gone extinct{" "}
              <div className="row">
                <div className="col">
                  <button
                    className="btn btn-success"
                    onClick={() => window.location.reload()}
                  >
                    Play Again?
                  </button>
                </div>
              </div>
            </>
          ) : (
            "Guess the word!"
          )}
        </h2>
      </div>

      <div className="row">
        <div className="col">
          <HangmanDisplayPic tries={wrongGuess.length} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <HangmanWordSpace
            guessedLtr={guessedLtr}
            wordGuessing={wordGuessing}
          />
        </div>
      </div>
      <div>
        <div className="alphabetLtrs">
          <Alphabet
            disabled={winner || loser}
            onBtnClick={BtnLetterClicked}
            guessedLtr={guessedLtr}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
