import React from "react";

//Komponente zur Darstellung der Schlange
const Snake = ({ body }) => {

  return (
    <>
    {body.map((segment, index) => (
      <div key={index}
      className="bg-green-500 h-[14px] w-[14px] md:h-5 md:w-5 border-[1px] md:border-2"
      style={{
        gridColumnStart: segment.x + 1,
        gridRowStart: segment.y +1
      }}
      ></div>
    ))}
    </>
  );
};

export default Snake;
