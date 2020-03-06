import React from "react";
import { Link } from "react-router-dom";

function NavTab() {
  return (
    <ul className="nav nav-tabs">
         <li className="nav-item">
        <Link to="About" className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>
        About
        </Link>
      </li>
    </ul>
  );
}

export default NavTab;
