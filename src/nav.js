import React from "react";

const nav = () => {
  return (
    <div>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          fontSize: "10vw",
          color: "blue",
        }}
      >
        <li>
          <a
            style={{ textDecoration: "none" }}
            href="#"
            target="_self"
            rel="noopener noreferrer"
          >
            Home
          </a>
        </li>
        <li>
          <a
            style={{ textDecoration: "none" }}
            href="#"
            target="_self"
            rel="noopener noreferrer"
          >
            One Page
          </a>
        </li>
        <li>
          <a
            style={{ textDecoration: "none" }}
            href="#"
            target="_self"
            rel="noopener noreferrer"
          >
            Two Page
          </a>
        </li>
      </ul>
    </div>
  );
};

export default nav;
