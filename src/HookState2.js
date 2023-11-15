import React, { useDtate, useState } from "react";

const HookState2 = () => {
  let [input, setInput] = useState("");
  let [inputText, setInputText] = useState("");
  let [message, setMessage] = useState([]);

  const getChageData = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  const addData = (e) => {
    e.preventDefault();
    if (input !== "" || input) {
      if (String(input).trim().length > 0) {
        message.push(input);
        setMessage(message);
        //or
        // setMessage([...message, input]);

        let data = "";
        message.forEach((v) => {
          if (data) {
            data += ", ";
          }

          data += v;
        });

        setInput("");
        setInputText(data);
      }
    }
  };

  return (
    <div>
      <div>
        <input
          style={{ fontSize: "20px" }}
          type="text"
          onChange={(e) => {
            getChageData(e);
          }}
          value={input}
        ></input>
        <button
          style={{ marginLeft: "4px", marginRight: "4px", fontSize: "20px" }}
          onClick={(e) => {
            addData(e);
          }}
        >
          Add Data
        </button>
      </div>
      <div>
        <textarea
          style={{ marginTop: "10px", fontSize: "20px" }}
          name="textData"
          id="textData"
          cols="20"
          rows="10"
          defaultValue={inputText}
        ></textarea>
      </div>
    </div>
  );
};

export default HookState2;
