import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header>
        <h1>RoutesPageTest</h1>
      </header>
      <nav>
        <ul
          style={{
            fontSize: "5vw",
            color: "red",
            marginLeft: "10px",
          }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/OnePage">OnePage</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
