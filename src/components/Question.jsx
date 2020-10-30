import React, { useState } from "react";

function Question({currentQuestion, choices, increment}) {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  // console.log(selectedAnswer);

  const handleSubmit = e => {
    e.preventDefault();
    if (selectedAnswer === "") {
      // error if submit nothing
    } else {
      if (selectedAnswer === currentQuestion.correct) {
        increment("score")
      }
      increment("counter");
      setSelectedAnswer("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {currentQuestion.question}
      {currentQuestion.correct}
      {choices.map( (choice, idx) => {
        return (
          <div key={idx}>
            <label> {choice} 
              <input 
                type="radio" 
                name="select" 
                value={choice}
                checked={selectedAnswer == choice}
                onChange={e => {setSelectedAnswer(e.target.value)}}
              />
            </label>
          </div>
        )
      })}
      <button>Submit Answer</button>
    </form>
  )
}

export default Question;