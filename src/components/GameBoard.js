import React from "react";
import Snake from "./Snake";
import Food from "./Food";
import HighScore from "./Score";
import Level from "./Level";
import Pause from "./Pause";
import GameInstructions from "./GameInstructions";

//Komponente zur Darstellung des Spielfeldes
const GameBoard = ({ snakeBody, food, board, score, level, isPaused }) => {

  return (
    <div className="flex flex-col justify-center items-center pb-36 min-h-screen bg-snack-pattern bg-no-repeat bg-contain bg-bottom bg-green-200">
      <div className="flex space-x-32">
        <Level level={level} />
        <HighScore score={score} />
      </div>
      <div className="grid grid-cols-[1fr,auto,1fr] gap-x-36">
      <GameInstructions />
        <div className="relative grid grid-cols-20 bg-green-900 p-6 rounded-lg">
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
                  <div key={cellIndex} className="bg-gray-900 h-5 w-5"></div>
                );
              })}
            </div>
          ))}
        </div>
        <div></div>
      </div>
      <Pause isPaused={isPaused} />
    </div>
  );
};

export default GameBoard;