import React from "react";
import snakemoveup from "../snake-move-up.png";
import snakemovedown from "../snake-move-down.png";
import snakemoveright from "../snake-move-right.png";
import snakemoveleft from "../snake-move-left.png";

//Komponente zur Darstellung der mobilen Richtungstasten 
const MobileMoveButtons = ({ touchMove }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-12 md:mt-0">
      <div className="h-16 w-16">
        <img
          src={snakemoveup}
          alt="Nach Oben"
          onTouchStart={() => touchMove("UP")}
          className="active:scale-90 transition duration-100 ease-in-out"
        />
      </div>
      <div className="flex gap-12">
        <div className="h-16 w-16">
          <img
            src={snakemoveleft}
            alt="Nach Links"
            onTouchStart={() => touchMove("LEFT")}
            className="active:scale-90 transition duration-100 ease-in-out"
          />
        </div>
        <div className="h-16 w-16">
          <img
            src={snakemoveright}
            alt="Nach Rechts"
            onTouchStart={() => touchMove("RIGHT")}
            className="active:scale-90 transition duration-100 ease-in-out"
          />
        </div>
      </div>
      <div className="h-16 w-16">
        <img
          src={snakemovedown}
          alt="Nach Unten"
          onTouchStart={() => touchMove("DOWN")}
          className="active:scale-90 transition duration-100 ease-in-out"
        />
      </div>
    </div>
  );
};

export default MobileMoveButtons;
