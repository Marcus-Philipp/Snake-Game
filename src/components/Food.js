import React from "react";

const Food = ({ position }) => {
    return (
        <div
        className="bg-red-500 h-5 w-5"
        style={{
            gridColumnStart: position.x + 1,
            gridRowStart: position.y + 1
        }}
        ></div>
    );
};

export default Food; 