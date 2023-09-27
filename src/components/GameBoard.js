import React from "react";
import Snake from "./Snake";
import Food from "./Food";

const GameBoard = ({ snakeBody, food }) => {
  const ROWS = 20;
  const COLS = 20;

  // Ein 2D-Array erstellen
  const board = Array.from({ length: ROWS }, () => Array(COLS).fill(null));

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="grid grid-cols-20">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="flex">
            {row.map((_, cellIndex) => {
              const isSnakeSegment = snakeBody.some(
                (seg) => seg.x === cellIndex && seg.y === rowIndex
              );

              if (isSnakeSegment) {
                 return <Snake key={cellIndex} body={[{ x: cellIndex, y: rowIndex }]} />;
              }

              if (food.x === cellIndex && food.y === rowIndex) {
                  return <Food key={cellIndex} position={food} />
              }

              return (
                <div key={cellIndex} className="bg-gray-400 h-5 w-5"></div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameBoard;