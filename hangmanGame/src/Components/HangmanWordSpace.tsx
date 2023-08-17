import React from "react";

interface wordProps{
    guessedLtr: string[]
    wordGuessing: string
}

const HangmanWordSpace = ({guessedLtr, wordGuessing}: wordProps) => {
 
  return (
    <div className="wordDisplayStyle">
      {wordGuessing.split("").map((ltr, index) => (
        <span className="bottomLetterBorder" key={index}>
          <span
            className="d-flex justify-content-center"
            style={{
              visibility: guessedLtr.includes(ltr) ? "visible" : "hidden",
            }}
          >
            {ltr}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWordSpace;
