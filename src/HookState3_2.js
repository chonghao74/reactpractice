import React, { useState } from "react";

const HookState3_2 = (props) => {
  return (
    <div>
      <textarea
        style={{ marginTop: "10px", fontSize: "20px" }}
        name="textData"
        id="textData"
        cols="20"
        rows="10"
        value={props.common}
      ></textarea>
    </div>
  );
};

export default HookState3_2;
