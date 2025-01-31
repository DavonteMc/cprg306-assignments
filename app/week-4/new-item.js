"use client"; // JavaScript is running in the browser representing the client

import { useState } from "react";

export default function NewItem() {
  const [count, setCount] = useState(1);

  const increment = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count !== 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex flex-row justify-center items-center w-60 h-16 bg-slate-200 rounded-2xl">
      <p className="flex-grow p-2 m-4 font-bold text-lg">{count}</p>
      <div className="flex flex-row">
        <button
          onClick={decrement}
          className={`p-1 m-2 w-16 font-bold text-xl rounded-3xl 
                    ${
                      count === 1
                        ? "bg-slate-500 text-white disabled"
                        : "text-black bg-indigo-300 hover:bg-indigo-600 active:bg-indigo-400"
                    }`}
        >
          -
        </button>
        <button
          onClick={increment}
          className={`p-1 m-2 w-16 font-bold text-xl rounded-3xl 
                    ${
                      count === 20
                        ? "bg-slate-500 text-white disabled"
                        : "text-black bg-indigo-300 hover:bg-indigo-600 active:bg-indigo-400"
                    }`}
        >
          +
        </button>
      </div>
    </div>
  );
}
