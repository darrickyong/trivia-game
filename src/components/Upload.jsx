import React, { useEffect, useState } from 'react';

export default function Upload({ handleUpload, fetchData, setModal }) {
  const [api, setApi] = useState("");

  useEffect(() => {
    setModal(true)
  }, [setModal])

  return (
    <div className="upload-page">
      <div className="welcome-buttons">
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
          onClick={() => fetchData(api)}
        >
          <input
            className="api"
            type="text"
            placeholder="Paste JSON API link here"
            value={api}
            onChange={e => setApi(e.target.value)} />

          </div>

        <div className="welcome-button" onClick={() => setModal(true)}>
          See Sample State
        </div>
      </div>
    </div>
  )
}