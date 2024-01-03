import React, { useState } from "react";

const Home = (props) => {
  console.log(props.myData);
  let [data, setData] = useState(0);
  let count = data;

  const reset = () => {
    count = 0;
    setData(count);
  };
  const addCountData = (e) => {
    e.preventDefault();
    count++;
    setData(count);
  };

  return (
    <div>
      <h1>Home</h1>
      <div>
        <textarea
          style={{ marginTop: "10px", fontSize: "20px" }}
          name="textData"
          id="textData"
          cols="20"
          rows="10"
          value={data}
        ></textarea>
      </div>
      <div>
        <button
          onClick={(e) => {
            addCountData(e);
          }}
        >
          Add One
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            reset();
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Home;
