import React, { useState } from "react";

const HookState3_1 = (props) => {
  const inputInit = "";
  const genderInit = "1";

  let [inputData, setInputData] = useState("");
  let [genderData, setGenderData] = useState(genderInit);

  const getInputData = (e) => {
    // console.log(e.target.value);
    setInputData(e.target.value);
  };

  const getGenderData = (e) => {
    e.preventDefault();
    setGenderData(e.target.value);
    console.log(e.target.value);
  };

  const addData = (e) => {
    e.preventDefault();
    if (inputData !== "" || inputData) {
      if (String(inputData).trim().length > 0) {
        // console.log(inputData);
        // console.log(genderData);
        let person = `name: ${inputData}, gender: ${genderData}, `;
        console.log(person);

        props.setCommon([...props.common, person]);

        setInputData(inputInit);
        setGenderData(genderInit);
        document.getElementById("hook-select").value = genderInit;
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          getInputData(e);
        }}
        value={inputData}
      />
      <select
        id="hook-select"
        onChange={(e) => {
          getGenderData(e);
        }}
        defaultValue={genderData}
      >
        <option value="0">Male</option>
        <option value="1">Female</option>
      </select>
      <button
        style={{ marginLeft: "10px", fontSize: "20px" }}
        onClick={(e) => {
          addData(e);
        }}
      >
        Test State Lifting
      </button>
    </div>
  );
};

export default HookState3_1;
