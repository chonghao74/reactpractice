import React from "react";
import "./style/infor.css";

const info = (props) => {
  console.log(props);
  return (
    <div className="div-default">
      <div>
        <label>friend： {props.number}</label>
      </div>
      <div>
        <label>name： {props.name}</label>
      </div>
      <div>
        <label>Age： {props.age}</label>
      </div>
    </div>
  );
};

//or
//object Destructuring
// const info = ({ name, data1, data2 }) => {
//   console.log({ name, data1, data2 });
//   return (
//     <div>
//       <label>{name}</label>
//     </div>
//   );
// };

export default info;
