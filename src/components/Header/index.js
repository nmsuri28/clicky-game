import React from "react";

function Header(props) {
  return (
    <div className="container-fluid fixed-top" id="header">
      Clicky Game &nbsp;&nbsp; <strong>Click an image to begin</strong>
      &nbsp;&nbsp;&nbsp;Score: {props.score} TopScore:{props.topScore}
    </div>
  );
}

export default Header;
