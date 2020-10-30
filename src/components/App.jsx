import React, { useState } from "react";

function App() {
  const [triviaData, setTriviaData] = useState([]);

  const handleUpload = e => {
    let reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(e.target.files[0]);
  }

  const onReaderLoad = e => {
    console.log(e.target.result);
    const triviaData = JSON.parse(e.target.result);
    setTriviaData(triviaData);
  }

  return (
    <div className="app">
      Tandem Trivia Game!
      <label> Upload a JSON file with trivia data :)
        <input 
          type="file" 
          name="file"
          onChange={handleUpload}
        />
      </label>
    </div>
  );
}

export default App;

// {triviaData.map( questionData => {
//   return (
//     <div>{questionData.question}</div>
//   )
// })}