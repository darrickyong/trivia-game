import React, { useState } from "react";
import Game from "./Game";
import Error from "./Error";
import data from "../Apprentice_TandemFor400_Data.json";

function App() {
  const [triviaData, setTriviaData] = useState([]);
  const [errors, setErrors] = useState([]);

  const handleUpload = e => {
    let reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(e.target.files[0]);
  }

  const onReaderLoad = e => {
    const triviaData = JSON.parse(e.target.result);
    setTriviaData(triviaData);
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
      {errors.length ? <Error errors={errors} /> : null}
    </div>
  );
}

export default App;