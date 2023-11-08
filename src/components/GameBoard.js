import React from "react";
import Snake from "./Snake";
import Food from "./Food";
import HighScore from "./Score";
import Level from "./Level";
import Pause from "./Pause";
import GameInstructions from "./GameInstructions";
import { useMediaQuery } from "react-responsive";
import MobileMoveButtons from "./MobileMoveButtons";
import MobilePauseButton from "./MobilePauseButton";

//Komponente zur Darstellung des Spielfeldes
const GameBoard = ({ snakeBody, food, board, score, level, isPaused }) => {
  //React Responsive MediaQuery deklariert
  const isDesktop = useMediaQuery({ query: "(min-width: 900px)" });

  return (
    <div className="flex flex-col bg-green-200 items-center lg:justify-center lg:pb-36 min-h-screen lg:bg-snack-pattern lg:bg-no-repeat lg:bg-contain lg:bg-bottom">
      <div className="lg:grid lg:grid-cols-[1fr,auto,1fr] lg:gap-x-10 lg:ml-8 xl:gap-x-36 xl:ml-0">
        {isDesktop && <GameInstructions />}
        <div className="flex flex-col bg-green-900 px-4 pb-4 md:px-6 md:pb-6 rounded-lg items-center">
          <div className="flex space-x-12 md:space-x-36">
            <Level level={level} />
            <HighScore score={score} />
          </div>
          {board.map((row, rowIndex) => (
            <div key={rowIndex} className="flex">
              {row.map((_, cellIndex) => {
                const isSnakeSegment = snakeBody.some(
                  (seg) => seg.x === cellIndex && seg.y === rowIndex
                );

                if (isSnakeSegment) {
                  return (
                    <Snake
                      key={cellIndex}
                      body={[{ x: cellIndex, y: rowIndex }]}
                    />
                  );
                }

                if (food.x === cellIndex && food.y === rowIndex) {
                  return <Food key={cellIndex} position={food} />;
                }

                return (
                  <div
                    key={cellIndex}
                    className="bg-gray-900 h-[14px] w-[14px] md:h-5 md:w-5"
                  ></div>
                );
              })}
            </div>
          ))}
        </div>
        <div></div>
        <div className="flex justify-center ml-16">
          {!isDesktop && <MobileMoveButtons />}
          {!isDesktop && <MobilePauseButton />}
        </div>
      </div>
      <Pause isPaused={isPaused} />
    </div>
  );
};

export default GameBoard;
