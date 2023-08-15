import React from "react";

const HangmanWordSpace = () => {
  const word = "TEST";
  const guessedLtrs = ["t", "a", "b"];
  return (
    <div className="wordDisplayStyle">
      {word.split("").map((letter, index) => (
        <span className="bottomLetterBorder" key={index}>
          <span
            className="d-flex justify-content-center"
            style={{
              visibility: guessedLtrs.includes(letter) ? "visible" : "hidden",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWordSpace;
