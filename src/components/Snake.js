import React from "react";

const Snake = ({ body }) => {

  return (
    <>
    {body.map((segment, index) => (
      <div key={index}
      className="bg-green-500 h-5 w-5 border-2"
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
