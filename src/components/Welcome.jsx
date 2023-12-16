import React, { useContext, useState } from "react";
import CustomQuestions from "./CustomQuestions";
import { MobileContext } from "./App";

export default function Welcome({
  highScore,
  clearHighScore,
  setTriviaData,
  quickStart,
}) {
  const [isCustom, setIsCustom] = useState(false);
  const isMobile = useContext(MobileContext);

  const buttons = (
    <div className="welcome-buttons">
      <div className="welcome-button" onClick={quickStart}>
        Quickstart
      </div>

      <div className="welcome-button" onClick={() => setIsCustom(true)}>
        Select Settings
      </div>
    </div>
  );

  const welcome = (
    <div className="welcome">
      <div className="welcome-high">
        {`High Score: ${highScore}`}
        <div className="welcome-high-button" onClick={clearHighScore}>
          Clear High Score
        </div>
      </div>
      <h1>Another Trivia Game!</h1>
      {buttons}
    </div>
  );

  const custom = (
    <div className="welcome">
      <h1>Select Your Settings</h1>
      <CustomQuestions
        goBack={() => setIsCustom(false)}
        setTriviaData={setTriviaData}
      />
    </div>
  );

  return isCustom ? custom : welcome;
}
