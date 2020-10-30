import React, { useState } from "react";
import Error from "./Error";

function Question({currentQuestion, choices, increment}) {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    setErrors([]);
    if (selectedAnswer === "") {
      setErrors(["Please select an answer."])
    } else {
      setSubmitted(!submitted);
    }
  }
  
  const handleNext = e => {
    e.preventDefault();
    if (selectedAnswer === currentQuestion.correct) {
      increment("score")
    }
    increment("counter");
    setSelectedAnswer("");
    setSubmitted(!submitted);
  }

  const submitButton = (
    <button onClick={handleSubmit}>Submit Answer</button>
  );

  const nextButton = (
    <button onClick={handleNext}>Next</button>
  );


  const correct = (
    <div>
      Correct
    </div>
  )
  
  const incorrect = (
    <div>
      Incorrect
    </div>
  )

  return (
    <div>
      <form>
        {currentQuestion.question}
        {currentQuestion.correct}
        {choices.map( (choice, idx) => {
          return (
            <div key={idx}>
              <label>  
                <input 
                  type="radio" 
                  name="select" 
                  value={choice}
                  checked={selectedAnswer === choice}
                  disabled={submitted}
                  onChange={e => {setSelectedAnswer(e.target.value)}}
                />
                {choice}
              </label>
              {submitted ? 
                choice === currentQuestion.correct ? 
                  correct : choice === selectedAnswer ? 
                      incorrect : null :
                null}
            </div>
          )
        })}
        {submitted ? nextButton : submitButton}
      </form>
      {errors.length ? <Error errors={errors} /> : null}
    </div>
    
  )
}

export default Question;