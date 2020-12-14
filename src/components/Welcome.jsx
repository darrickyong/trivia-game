import React, { useState } from 'react';
import Upload from './Upload';

export default function Welcome({ 
  highScore, 
  clearHighScore, 
  quickStart, 
  handleUpload, 
  fetchData, 
  setModal,
}) {
  const [showUpload, setShowUpload] = useState(false);

  const buttons = (
    <div className="welcome-buttons">
      <div
        className="welcome-button"
        onClick={quickStart}
      >Quickstart</div>

      <div
        className="welcome-button"
        onClick={() => setShowUpload(true)}
      >Use my own file</div>

      {/* <label
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
            onChange={e => setApiLink(e.target.value)} />
          Fetch from API
        </div> */}
    </div>
  )

  return (
    <div className="welcome">
      <div className="welcome-high">
        {`High Score: ${highScore}`}
        <div
          className="welcome-high-button"
          onClick={clearHighScore}>Clear High Score</div>
      </div>
      <h1>Darrick's Trivia Game!</h1>
      {showUpload ? 
        <Upload 
          handleUpload={handleUpload} 
          fetchData={fetchData}
          setModal={setModal}
        /> : 
        buttons}
    </div>
  )
}