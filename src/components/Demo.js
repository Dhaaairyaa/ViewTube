import React, { useMemo, useState } from "react";
import { findNthPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  //   const prime = findNthPrime(text);
  const prime = useMemo(() => findNthPrime(text), [text]);

  const [darkTheme, isdarkTheme] = useState(false);
  return (
    <div
      className={`m-4 p-2 w-96 h-96 border border-black ${
        darkTheme ? "bg-[#b5c791]" : "bg-white"
      }`}
    >
      <div className="w-72 border border-black">
        <input
          type="number"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></input>
      </div>
      <div>
        <h1>Nth Prime:{prime}</h1>
      </div>
      <div>
        <button
          className="m-2 p-3 border border-black "
          onClick={() => {
            isdarkTheme(!darkTheme);
          }}
        >
          Change Theme
        </button>
      </div>
    </div>
  );
};

export default Demo;
