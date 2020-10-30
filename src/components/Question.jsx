import React, { useState } from "react";
import Error from "./Error";

function Question({currentQuestion, choices, increment}) {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    setErrors([]);
    if (selectedAnswer === "") {
      setErrors(["Please select an answer."])
    } else {
      if (selectedAnswer === currentQuestion.correct) {
        increment("score")
      }
      increment("counter");
      setSelectedAnswer("");
    }
  }

  return (
    <div>
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
                  checked={selectedAnswer === choice}
                  onChange={e => {setSelectedAnswer(e.target.value)}}
                />
              </label>
            </div>
          )
        })}
        <button>Submit Answer</button>
      </form>
      {errors.length ? <Error errors={errors} /> : null}
    </div>
    
  )
}

export default Question;