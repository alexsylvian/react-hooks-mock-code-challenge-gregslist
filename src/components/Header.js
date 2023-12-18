import React from "react";
import Search from "./Search";

function Header({ setSubmission }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setSubmission={setSubmission} />
    </header>
  );
}

export default Header;
