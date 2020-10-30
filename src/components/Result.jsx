import React, { useState } from "react";

function Result({score, resetGame, setTriviaData}) {
  let message;
  switch(true) {
    case (score < 5):
      message = "Yikes..."
      break;
    case (score < 10):
      message = "Almost there..."
      break;
    default:
      message = "Perfect score!"
      break;
  }

  return (
    <div>
      {`${message} You scored ${score} out of 10.`}
      <button onClick={resetGame}>Retry with same questions</button>
      <button onClick={() => setTriviaData([])}>Start Over</button>
    </div>
  )
}

export default Result;