import React from "react";
import snakemoveup from "../snake-move-up.png";
import snakemovedown from "../snake-move-down.png";
import snakemoveright from "../snake-move-right.png";
import snakemoveleft from "../snake-move-left.png";

const MobileMoveButtons = () => {
  return (
    
      <div className="flex flex-col items-center justify-center mt-12 md:mt-0">
        <div className="h-16 w-16">
          <img src={snakemoveup} alt="Nach Oben" />
        </div>
        <div className="flex gap-12">
          <div className="h-16 w-16">
            <img src={snakemoveleft} alt="Nach Links" />
          </div>
          <div className="h-16 w-16">
            <img src={snakemoveright} alt="Nach Rechts" />
          </div>
        </div>
        <div className="h-16 w-16">
          <img src={snakemovedown} alt="Nach Unten" />
        </div>
      </div>
    
  );
};

export default MobileMoveButtons;
