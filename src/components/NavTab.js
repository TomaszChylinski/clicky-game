import React from "react";
import { Link } from "react-router-dom";

function NavTab() {
  return (
    <nav class="navbar">
      <ul>
        <li class="brand">
          <a href="/">Clicky Game</a>
        </li>

        <li class="">Click an image to begin!</li>

        <li>Score: 0 | Top Score: 0</li>
      </ul>
    </nav>
  );
}

export default NavTab;
