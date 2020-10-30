import React from "react";

function Error({errors}) {
  return (
    <div>
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