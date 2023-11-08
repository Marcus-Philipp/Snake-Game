import React from "react";
import pausebutton from "../pause-button.png";

//Komponente zur Darstellung des mobilen Pause Buttons
const MobilPauseButton = ({ touchIsPause }) => {
  return (
    <div className="w-16 h-16">
      <img src={pausebutton} alt="Pause Taste" onTouchStart={() => touchIsPause()} />
    </div>
  );
};

export default MobilPauseButton;
