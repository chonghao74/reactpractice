import React, { useState } from "react";

const HookState1 = () => {
  let iniData = 0;
  let [input, setInput] = useState(iniData);

  const resetCount = (e) => {
    e.preventDefault();
    // console.log(e.target.firstChild.data);
    input = iniData;
    setInput(input);
  };

  const addCount = (e) => {
    e.preventDefault();
    console.log("addCount");
    input++;
    setInput(input);
  };

  return (
    <form>
      <label id="">計數器</label>
      <div>
        <button
          onClick={(e) => {
            resetCount(e);
          }}
        >
          reset
        </button>
        <button
          onClick={(e) => {
            addCount(e);
          }}
        >
          {input}
        </button>
      </div>
    </form>
  );
};

export default HookState1;
