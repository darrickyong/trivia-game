import React from "react";

function Result({score, resetGame, setTriviaData, highScore, setHighScore}) {
  if (!localStorage.highScore || score > localStorage.highScore) {
    localStorage.highScore = score;
  }

  const allTimeHigh = Math.max(highScore, localStorage.highScore);

  const startOver = () => {
    setHighScore(allTimeHigh);
    setTriviaData([]);
  }

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
      <div>
        {`High Score: ${allTimeHigh}`}
      </div>
      {`You scored ${score} out of 10. ${message}`}

      <div className="result-buttons">
        <div className="result-button" onClick={resetGame}>Retry with same questions</div>
        <div className="result-button" onClick={startOver}>Start Over</div>
      </div>
    </div>
  )
}

export default Result;