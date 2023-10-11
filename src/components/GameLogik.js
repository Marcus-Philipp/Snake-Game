import React, { useState, useEffect, useCallback } from 'react';
import GameBoard from './GameBoard';

const BOARD_WIDTH = 20;
const BOARD_HEIGHT = 20;
const INITIAL_SPEED = 200;
const LEVEL_UP_SPEED_REDUCTION = 10;
const LEVEL_UP_INTERVAL = 10;

const initialSnakeBody = [
    { x: 10, y: 5 }, //Kopf
    { x: 10, y: 4 }, //Koerper
    { x: 10, y: 3 } //Schwanz
];

const GameLogik = () => {

    const [snake, setSnake] = useState(initialSnakeBody);

    const [direction, setDirection] = useState('DOWN');

    const [score, setScore] = useState(0);

    const [level, setLevel] = useState(0);

    const [speed, setSpeed] = useState(INITIAL_SPEED);

    const [lastCheckScore, setLastCheckScore] = useState(0);

    const [isPaused, setIsPaused] = useState(false);

    const generateFood = () => ({

        x: Math.floor(Math.random() * BOARD_WIDTH),
        y: Math.floor(Math.random() * BOARD_HEIGHT)
    });

    const [food, setFood] = useState(generateFood);

    // Ein 2D-Array erstellen
    const board = Array.from({ length: BOARD_WIDTH }, () => Array(BOARD_HEIGHT).fill(null));

    const moveSnake = (currentSnake, currentDirection) => {
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
        newSnake.pop();

        return newSnake;

    };

    const isCollisionWithSelf = (head, snakeBody) => {

        for (let segment of snakeBody.slice(1)) {
            if (segment.x === head.x && segment.y === head.y) {
                return true;
            }
        }

        return false;
    };

    const isCollisionWithWall = (head) => {
        if (head.x < 0 || head.x >= BOARD_WIDTH || head.y < 0 || head.y >= BOARD_HEIGHT) {
            return true;
        }

        return false;
    };

    const resetGame = useCallback(() => {
        setSnake(initialSnakeBody);
        setFood(generateFood());
        setDirection('DOWN');
        setScore(0);
        setLastCheckScore(0);
        setLevel(0);
        setSpeed(INITIAL_SPEED);
    }, []);

    // Bewegungslogik
    useEffect(() => {

        const move = () => {

            if (isPaused) {
                return;
            };

            let schouldGrow = false;
            let newSnake = moveSnake(snake, direction);
            const head = { ...newSnake[0] };

            if (head.x === food.x && head.y === food.y) {
                schouldGrow = true;
                setScore(score => score + 1);
                setFood(generateFood());
            };

            if (schouldGrow) {
                const tail = snake[snake.length - 1];
                newSnake.push(tail);
            }

            if (isCollisionWithSelf(head, newSnake)) {
                resetGame();
                return;
            };

            if (isCollisionWithWall(head)) {
                resetGame();
                return;
            };

            setSnake(newSnake);

        };

        const gameInterval = setInterval(move, speed);

        return () => clearInterval(gameInterval);
    }, [snake, direction, food, resetGame, speed, isPaused]);

    // Punktelogik
    useEffect(() => {
        if (score % LEVEL_UP_INTERVAL === 0 && score !== lastCheckScore) {
            setLevel(level => level + 1);
            setSpeed(prevSpeed => prevSpeed - LEVEL_UP_SPEED_REDUCTION);
            setLastCheckScore(score);
        };
    }, [lastCheckScore, score]);


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
            case ' ':
                setIsPaused(prevIsPaused => !prevIsPaused);
                break;
            default:
                break;
        }
    };

    // Eventlistener-Logik
    useEffect(() => {

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return <GameBoard
        snakeBody={snake}
        food={food}
        board={board}
        score={score}
        level={level}
        isPaused={isPaused}
    />
};

export default GameLogik;