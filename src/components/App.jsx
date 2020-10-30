import React, { useState } from "react";
import Game from "./Game";

function App() {
  const [triviaData, setTriviaData] = useState([]);

  const handleUpload = e => {
    let reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(e.target.files[0]);
  }

  const onReaderLoad = e => {
    const triviaData = JSON.parse(e.target.result);
    setTriviaData(triviaData);
  }

  const welcome = (
    <div>
      <h1>
        Tandem Trivia Game!
      </h1>
      <label> Upload a JSON file with trivia data :)
        <input 
          type="file" 
          name="file"
          onChange={handleUpload}
        />
      </label>

    </div>
  )

  return (
    <div className="app">
      {!triviaData.length ? welcome : <Game triviaData={triviaData} setTriviaData={setTriviaData}/>}
    </div>
  );
}

export default App;