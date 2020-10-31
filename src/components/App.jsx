import React, { useState } from "react";
import { FaLinkedin, FaGithubAlt, FaAngellist } from "react-icons/fa";
import Game from "./Game";
import Error from "./Error";
import defaultData from "../Apprentice_TandemFor400_Data.json";

function App() {
  const [apiLink, setApiLink] = useState("");
  const [triviaData, setTriviaData] = useState([]);
  const [errors, setErrors] = useState([]);
  const [highScore, setHighScore] = useState(localStorage.highScore || 0);

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

  const welcome = (
    <div className="welcome">
      <div className="welcome-high">
        {`High Score: ${highScore}`}
        <div
          className="welcome-high-button"
          onClick={clearHighScore}>Clear High Score</div>
      </div>
      <h1>Tandem Trivia Game!</h1>
      <div className="welcome-buttons">
        <div
          className="welcome-button" 
          onClick={quickStart}
        >Quickstart</div>

        <label 
          className="welcome-button"
          htmlFor="file"
        > Upload JSON File 
          <input 
            className="upload"
            id="file"
            type="file" 
            name="file"
            onChange={handleUpload}
          />
        </label>

        <div 
          className="welcome-button"
          onClick={() => fetchData(apiLink)}
        >
          <input
            className="api" 
            type="text"
            placeholder="Paste JSON API link here"
            value={apiLink}
            onChange={e => setApiLink(e.target.value)}/>
          Fetch from API
        </div>
      </div>
    </div>
  )

  const socialMedia = (
    <div className="social">
      <a href="https://www.linkedin.com/in/darrick-yong/">
        <FaLinkedin className="linkedin" />
      </a>

      <a href="https://github.com/darrickyong">
        <FaGithubAlt className="github" />
      </a>

      <a href="https://angel.co/u/darrick-yong">
        <FaAngellist className="angel" />
      </a>
    </div>
  )

  return (
    <div className="app">
      {socialMedia}
      {triviaData.length ?  
        <Game 
          triviaData={triviaData} 
          setTriviaData={setTriviaData}
          highScore={highScore}
          setHighScore={setHighScore}
        /> :
        welcome}
      <Error errors={errors} />
    </div>
  );
}

export default App;