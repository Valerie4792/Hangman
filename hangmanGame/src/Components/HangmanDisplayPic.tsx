import React from "react";

interface HangmanPicProps {
  tries: number;
}
//array of background images in order
export const hangmanBGImages = [
 "../src/assets/Beginning.png",
  "../src/assets/egg1.png",
  "../src/assets/hatch1.png",
  "../src/assets/dinoJr.png",
  "../src/assets/olderDino.png",
  "../src/assets/eruption.png",
  "../src/assets/extinct.png",
];

const HangmanDisplayPic = ({ tries }: HangmanPicProps) => {
  return ( <div>
  


    </div>)
 
};

export default HangmanDisplayPic;
