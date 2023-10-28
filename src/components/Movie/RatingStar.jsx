// import React from 'react'
import { useState } from "react";
import Star from "./Star";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16"
};

const starContainerStyle = {
  display: "flex"
};
const textStyle = {
  lineHeight: "1",
  margin: "0"
};

function RatingStar({ maxRating = 5 }) {
  const [rating, setRating] = useState(0);

  const [tempRating, setTempRating] = useState(0);

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => {
          return (
            <Star
              key={i}
              onRate={() => setRating(i + 1)}
              full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
              onMouseIn={() => setTempRating(i + 1)}
              onMouseOut={() => setTempRating(0)}
            />
          );
        })}
      </div>
      <p style={textStyle}>{tempRating || rating || ""}</p>
    </div>
  );
}

export default RatingStar;
