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
        />
      </div>
      <div className="flex gap-12">
        <div className="h-16 w-16">
          <img
            src={snakemoveleft}
            alt="Nach Links"
            onTouchStart={() => touchMove("LEFT")}
          />
        </div>
        <div className="h-16 w-16">
          <img
            src={snakemoveright}
            alt="Nach Rechts"
            onTouchStart={() => touchMove("RIGHT")}
          />
        </div>
      </div>
      <div className="h-16 w-16">
        <img
          src={snakemovedown}
          alt="Nach Unten"
          onTouchStart={() => touchMove("DOWN")}
        />
      </div>
    </div>
  );
};

export default MobileMoveButtons;
