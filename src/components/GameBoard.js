import React from "react";
import Snake from "./Snake";
import Food from "./Food";
import HighScore from "./Score";
import Level from "./Level";

const GameBoard = ({ snakeBody, food, height, width, score, level }) => {
  const ROWS = height;
  const COLS = width;

  // Ein 2D-Array erstellen
  const board = Array.from({ length: ROWS }, () => Array(COLS).fill(null));

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-200">
      <div className="flex space-x-32">
      <Level level={level} />
      <HighScore score={score} />
      </div>
      <div className="grid grid-cols-20 shadow-lg p-6 bg-black rounded">
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