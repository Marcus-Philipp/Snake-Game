import React from "react";
import pausebutton from "../pause-button.png";

const MobilPauseButton = () => {
    return (
        <div className="flex">
            <div className="w-16 h-16">
                <img src={pausebutton} alt="Pause Taste" />
            </div>
        </div>
    );
};

export default MobilPauseButton;