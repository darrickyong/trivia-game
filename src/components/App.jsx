import React, { useState } from "react";
import Game from "./Game";
import Error from "./Error";
import data from "../Apprentice_TandemFor400_Data.json";

function App() {
  const [triviaData, setTriviaData] = useState([]);
  const [errors, setErrors] = useState([]);

  const checkJSON = sampleQuestion => {
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

  const quickStart = e => {
    setTriviaData(data)
  }

  const welcome = (
    <div className="welcome">
      <h1>Tandem Trivia Game!</h1>

      <div className="welcome-buttons">
        <div
          className="welcome-button" 
          onClick={quickStart}
        >Quickstart</div>

        <label 
          className="welcome-button"
          htmlFor="file"
        > Use Your Own JSON File 
          <input 
            className="upload"
            id="file"
            type="file" 
            name="file"
            onChange={handleUpload}
          />
        </label>
      </div>
    </div>
  )

  return (
    <div className="app">
      {triviaData.length ?  
        <Game 
          triviaData={triviaData} 
          setTriviaData={setTriviaData}
        /> :
        welcome}
      <Error errors={errors} />
    </div>
  );
}

export default App;