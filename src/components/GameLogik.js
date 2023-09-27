import React, { useState, useEffect } from 'react';
import GameBoard from './GameBoard';

const GameLogik = () => {
    const initialSnakeBody = [
        { x: 10, y: 10 }, //Kopf
        { x: 10, y: 9 }, //Korper
        { x: 10, y: 8 } //Schwanz
    ];

    const initialFood = {
        x: Math.floor(Math.random() * 20),
        y: Math.floor(Math.random() * 20)
    }

    const [snake, setSnake] = useState(initialSnakeBody);

    const [food, setFood] = useState(initialFood);

    const [direction, setDirection] = useState('RIGHT');

    useEffect(() => {
        const moveSnack = () => {
            let newSnake = [...snake];

            let head = Object.assign({}, newSnake[0]);

            switch (direction) {
                case 'RIGHT':
                    head.x += 1;
                    break;
                case 'LEFT':
                    head.x -= 1;
                    break;
                case 'UP':
                    head.y -= 1;
                    break;
                case 'DOWN':
                    head.y += 1;
                    break;
                default:
                    break;
            }

            newSnake.unshift(head);
            newSnake.pop();

            setSnake(newSnake);

        };

        const gameInterval = setInterval(moveSnack, 500);

        return () => clearInterval(gameInterval);
    }, [snake, direction]);

    useEffect(() => {
        const handleKeyDown = (e) => {

            switch (e.key) {
                case 'ArrowRight':
                    if (direction === 'RIGHT') setDirection('RIGHT');
                    break;
                case 'ArrowLeft':
                    if (direction === 'LEFT') setDirection('LEFT');
                    break;
                case 'ArrowUp':
                    if (direction === 'UP');
                    break;
                case 'ArrowDown':
                    if (direction === 'DOWN');
                    break;
                default:
                    break;
            }
          };

          window.addEventListener('keydown', handleKeyDown);
          return () => {
            window.removeEventListener('keydown', handleKeyDown);
        } 
    }, [direction]);

    return <GameBoard snakeBody={snake} food={food} />
};

export default GameLogik;