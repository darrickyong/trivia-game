import React, { useState } from "react";

function Result({score, resetGame, setTriviaData}) {
  return (
    <div>
      {`Congratulations! You scored ${score} out of 10!`}
      <button onClick={resetGame}>Retry with same questions</button>
      <button onClick={() => setTriviaData([])}>Start Over</button>
    </div>
  )
}

export default Result;