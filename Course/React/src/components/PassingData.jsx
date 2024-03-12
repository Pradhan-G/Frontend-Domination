import React from "react";

function PassingData({ color, text }) {
  return (
    <div>
      <button className={`rounded-md px-1 py-2 ${color} text-white`}>
        {text}
      </button>
    </div>
  );
}

export default PassingData;
