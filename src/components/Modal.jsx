import React, { useEffect } from 'react';

export default function Modal({ setModal }) {
  
  const data = {
    "question": "What is 1+1?",
    "correct": "2",
    "incorrect": ["3", "4", "5"],
  }

  const sampleData = (
    <pre className="sample-state">
      Use a file with this sample state: 
      <br></br>
      <br></br>
      {JSON.stringify(data, undefined, 2)}
    </pre>
  )

  return (
    <div className="modal-background" onClick={() => setModal(false)}>
      <div className="modal-child" onClick={(e) => e.stopPropagation()}>
        {sampleData}
      </div>
    </div>
  )
}