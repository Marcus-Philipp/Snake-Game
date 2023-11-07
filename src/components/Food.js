import React from "react";

//Komponente zur Darstellung des Futters
const Food = ({ position }) => {
    return (
        <div
        className="h-[14px] w-[14px] md:h-5 md:w-5 bg-gray-900 bg-apple-pattern bg-no-repeat bg-cover"
        style={{
            gridColumnStart: position.x + 1,
            gridRowStart: position.y + 1
        }}
        ></div>
    );
};

export default Food; 