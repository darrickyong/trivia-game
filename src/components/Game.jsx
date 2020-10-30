import React, { useState } from "react";
import Question from "./Question";
import Result from "./Result";

function Game({triviaData, setTriviaData}) {
  
  const randomizeArray = (questionArray, n) => {
    let questions = new Array(n),
          len = questionArray.length,
          taken = new Array(len);
    while (n--) {
      let x = Math.floor(Math.random() * len);
      questions[n] = questionArray[x in taken ? taken[x]: x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return questions;
  }

  const [counter, setCounter] = useState(0);
  const [score, setScore] = useState(0);
  const [actualQuestions, setActualQuestions] = useState(randomizeArray(triviaData, 10));
  
  const currentQuestion = actualQuestions[counter];
  const choices = currentQuestion ? currentQuestion.incorrect.concat(currentQuestion.correct) : null;
  const randomChoices = currentQuestion ? randomizeArray(choices, 4): null;

  const increment = item => {
    if (item === "score") {
      setScore(score + 1)
    } else if (item === "counter") {
      setCounter(counter + 1)
    }
  }

  const resetGame = () => {
    setCounter(0);
    setScore(0);
  }

  return (
    <div>
      {currentQuestion ? (
        <div>        
          <div>
            {`Question ${counter + 1} of 10`}
          </div>
          <Question 
            currentQuestion={currentQuestion}
            choices={randomChoices}
            increment={increment}
          /> 
        </div>
      )
      : <Result 
          score={score}
          resetGame={resetGame}
          setTriviaData={setTriviaData}
        />}
    </div>
  )
}

export default Game;