import React, { useState } from "react";
import Welcome from './Welcome';
import Modal from './Modal';
import Social from './Social';
import Game from "./Game";
import Error from "./Error";
import defaultData from "../db.json";

function App() {
  const [modal, setModal] = useState(false);
  const [triviaData, setTriviaData] = useState([]);
  const [errors, setErrors] = useState([]);
  const [highScore, setHighScore] = useState(localStorage.highScore || 0);

  const checkJSON = sampleQuestion => {
    if (!(sampleQuestion instanceof Array)) return false;
    let question = typeof sampleQuestion.question == "string";
    let correct = typeof sampleQuestion.correct == "string";
    let incorrect = sampleQuestion.incorrect.every( choice => typeof choice == "string") && sampleQuestion.incorrect.length === 3;
    return question && correct && incorrect;
  }  

  const handleUpload = e => {
    let reader = new FileReader();
    reader.onload = onReaderLoad;
    if (e.target.files[0].type !== "application/json") {
      const fileType = e.target.files[0].type.split("/")[1].toUpperCase();
      setErrors([`You uploaded a ${fileType} file. Please upload a JSON file instead.`])
      return;
    }
    reader.readAsText(e.target.files[0]);
  }
  
  const onReaderLoad = e => {
    const triviaData = JSON.parse(e.target.result);
    if (checkJSON(triviaData[0])) {
      setErrors([]);
      setTriviaData(triviaData);
    } else {
      setErrors(["Please check that the JSON format is correct."])
    }
  }

  const fetchData = link => {
    if(link.length) {
      fetch(link)
        .then(res => res.json())
        .then(data => {
          if (checkJSON(data[0])) {
            setErrors([]);
            setTriviaData(data);
          } else {
            setErrors(["Please check that the JSON format is correct."])
          }
        })
    }
  }

  const quickStart = e => {
    setTriviaData(defaultData);
  }

  const clearHighScore = () => {
    setHighScore(0);
    localStorage.highScore = 0;
  }

  return (
    <div>
      {modal ? <Modal setModal={setModal}/> : null}
      <div className="app">
        <Social />
        {triviaData.length ?  
          <Game 
            triviaData={triviaData} 
            setTriviaData={setTriviaData}
            highScore={highScore}
            setHighScore={setHighScore}
          /> :
          <Welcome 
            highScore={highScore}
            clearHighScore={clearHighScore}
            quickStart={quickStart}
            handleUpload={handleUpload}
            fetchData={fetchData}
            setModal={setModal}
          />}
        <Error errors={errors} />
      </div>
    </div>
  );
}

export default App;