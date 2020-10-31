import React, { useState } from "react";

function Result({score, resetGame, setTriviaData}) {
  let message;
  switch(true) {
    case (score < 3):
      message = "Yikes..."
      break;
    case (score < 7):
      message = "You can do better..."
      break;
    case (score < 10):
      message = "Almost there..."
      break;
    default:
      message = "Perfect score!"
      break;
  }

  return (
    <div className="result">
      {`You scored ${score} out of 10. ${message}`}

      <div className="result-buttons">
        <div className="result-button" onClick={resetGame}>Retry with same questions</div>
        <div className="result-button" onClick={() => setTriviaData([])}>Start Over</div>
      </div>
    </div>
  )
}

export default Result;