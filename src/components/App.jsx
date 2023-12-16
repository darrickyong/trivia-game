import React, { createContext, useState } from "react";
import Welcome from "./Welcome";
import Social from "./Social";
import Game from "./Game";
import Error from "./Error";

export const MobileContext = createContext(false);

export const getQuestions = async (queryParams = "") => {
  const response = await fetch(
    `https://the-trivia-api.com/v2/questions?${queryParams}`
  );
  const data = await response.json();
  return data;
};

function App() {
  const [triviaData, setTriviaData] = useState([]);
  const [errors, setErrors] = useState([]);
  const [highScore, setHighScore] = useState(localStorage.highScore || 0);

  const quickStart = async () => {
    const questions = await getQuestions();
    setTriviaData(questions);
  };

  const clearHighScore = () => {
    setHighScore(0);
    localStorage.highScore = 0;
  };

  const renderGame = () => {
    return triviaData.length ? (
      <Game
        triviaData={triviaData}
        setTriviaData={setTriviaData}
        highScore={highScore}
        setHighScore={setHighScore}
      />
    ) : (
      <Welcome
        highScore={highScore}
        clearHighScore={clearHighScore}
        quickStart={quickStart}
        setTriviaData={setTriviaData}
      />
    );
  };

  return (
    <div>
      <div className="app">
        <Social />
        {renderGame()}
        <Error errors={errors} />
      </div>
    </div>
  );
}

export default App;
