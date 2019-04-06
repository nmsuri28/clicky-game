import React from "react";

function Instructions(props) {
  return (
    <div>
      <div className="conatiner-full-bg" id="instructions">
        <div className="jumbotron img-fluid">
          <div className="instructionsbackground">
            <h1 className="h1 text-center display-4 mt-5">Clicky Game!</h1>

            <p className="text-center mb-5">
              Click on an image to earn points, but don't click on any more then
              once!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instructions;
