import React, { useState, useEffect } from 'react';
import GameBoard from './GameBoard';

const GameLogik = () => {
    const initialSnakeBody = [
        { x: 10, y: 5 }, //Kopf
        { x: 10, y: 4 }, //Koerper
        { x: 10, y: 3 } //Schwanz
    ];

    const generateFood = () => ({

        x: Math.floor(Math.random() * 20),
        y: Math.floor(Math.random() * 20)
    });

    const [snake, setSnake] = useState(initialSnakeBody);

    const [food, setFood] = useState(generateFood);

    const [direction, setDirection] = useState('DOWN');

    const moveSnake = (currentSnake, currentDirection, shouldGrow = false) => {
        let newSnake = [...currentSnake];

        let head = { ...newSnake[0] };

        switch (currentDirection) {
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
        if (!shouldGrow) {
            newSnake.pop();
        };

        return newSnake;

    };

    const resetGame = () => {
        setSnake(initialSnakeBody);
        setFood(generateFood());
        setDirection('DOWN');
    };

    const isCollisionWithSelf = (head, snakeBody) => {

        for (let segment of snakeBody.slice(1)) {
            if (segment.x === head.x && segment.y === head.y) {
                return true;
            }
        }

        return false;
    };

    useEffect(() => {

        const move = () => {
            const newSnake = moveSnake(snake, direction);

            const head = newSnake[0];

            if (head.x === food.x && head.y === food.y) {
                newSnake.unshift(head);
                setFood(generateFood());
            };

            if (isCollisionWithSelf(head, newSnake)) {
                resetGame();
                return;
            };

            setSnake(newSnake);

        };

        const gameInterval = setInterval(move, 100);

        return () => clearInterval(gameInterval);
    }, [snake, direction, food.x, food.y, resetGame]);


    const handleKeyDown = (e) => {

        switch (e.key) {
            case 'ArrowRight':
                setDirection('RIGHT');
                break;
            case 'ArrowLeft':
                setDirection('LEFT');
                break;
            case 'ArrowUp':
                setDirection('UP');
                break;
            case 'ArrowDown':
                setDirection('DOWN');
                break;
            default:
                break;
        }
    };

    useEffect(() => {

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return <GameBoard snakeBody={snake} food={food} />
};

export default GameLogik;