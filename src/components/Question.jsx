import React, { useState } from "react";

function Question({currentQuestion, choices, increment}) {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  
  const handleNext = e => {
    e.preventDefault();
    if (selectedAnswer === currentQuestion.correctAnswer) {
      increment("score")
    }
    increment("counter");
    setSelectedAnswer("");
    setSubmitted(!submitted);
  }
  
  const handleClick = e => {
    if (!submitted) {
      setSubmitted(!submitted);
      setSelectedAnswer(e.target.innerText)
    };
  }

  const nextButton = (
    <div
      className="question-next"
      style={{visibility: submitted ? "visible" : "hidden"}} 
      onClick={handleNext}
    >Next</div>
  )

  return (
    <div className="question">
      {currentQuestion.question.text}
      {choices.map( (choice, idx) => {
        return (
          <div 
            key={idx}
            className={
              submitted && choice === currentQuestion.correctAnswer ? "question-choice correct" : 
              submitted && choice === selectedAnswer ? "question-choice incorrect" : "question-choice"}
            onClick={handleClick}
          >
          {choice}</div>
        )
      })}
      {nextButton}
    </div>
    
  )
}

export default Question;