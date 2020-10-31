import React from "react";

function Error({errors}) {
  return (
    <div 
      className="errors"
      style={{visibility: errors.length ? "visible" : "hidden"}}>
      {errors.map((error, idx) => {
        return (
          <div key={idx}>
            {error}
          </div>
        )
      })}
    </div>
  )
}

export default Error;