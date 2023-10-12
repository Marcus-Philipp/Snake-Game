import React, { useState, useEffect, useCallback } from 'react';
import GameBoard from './GameBoard';

//Breite des Spielfeldes
const BOARD_WIDTH = 20;
//Hoehe des Spielfeldes
const BOARD_HEIGHT = 20;
//Anfangsgeschwindigkeit der Schlange
const INITIAL_SPEED = 200;
//Wert zur Steigerung der Geschwindigkeit
const LEVEL_UP_SPEED_REDUCTION = 10;
//Faktor, ab wann, naechstes Level erreicht wird
const LEVEL_UP_INTERVAL = 10;

//Erstellen der Schlange
const initialSnakeBody = [
    { x: 10, y: 5 }, //Kopf
    { x: 10, y: 4 }, //Koerper
    { x: 10, y: 3 } //Schwanz
];

const GameLogik = () => {

    //Zustand der Schlange
    const [snake, setSnake] = useState(initialSnakeBody);
    //Zustand der Bewegungsrichtung
    const [direction, setDirection] = useState(null);
    //Zustand der Punktzahl
    const [score, setScore] = useState(0);
    //Zustand des Levels
    const [level, setLevel] = useState(0);
    //Zustand der Geschwindigkeit der Schlange
    const [speed, setSpeed] = useState(INITIAL_SPEED);
    //Zustand der Pruefungszahl. Ist noetig fuer die Bedingung des Levelzustandes.
    const [lastCheckScore, setLastCheckScore] = useState(0);
    //Zustand der Pausenfunktion
    const [isPaused, setIsPaused] = useState(false);

    //Generierung der zufaelligen Platzierung des Futters mit Beruecksichtigung der Schlange
    const generateFood = useCallback(() => {

        const newFood = {
            x: Math.floor(Math.random() * BOARD_WIDTH),
            y: Math.floor(Math.random() * BOARD_HEIGHT)
        };

        if (snake.some(segment => segment.x === newFood.x && segment.y === newFood.y)) {
            return generateFood();
        }
        return newFood;
    }, [snake]);


    //Zustand des Futters
    const [food, setFood] = useState(generateFood);

    //Ein 2D-Array erstellen
    const board = Array.from({ length: BOARD_WIDTH }, () => Array(BOARD_HEIGHT).fill(null));

    //Funktion, zur implementierung, der gedrueckten Tasten
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

    //Funktion, um die Schlange, zu steuern
    const moveSnake = (currentSnake, currentDirection) => {
        const newSnake = [...currentSnake];

        const head = { ...newSnake[0] };

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

    //Ueberpruefung der Selbstkollision
    const isCollisionWithSelf = (head, snakeBody) => {

        for (let segment of snakeBody.slice(1)) {
            if (segment.x === head.x && segment.y === head.y) {
                return true;
            }
        }

        return false;
    };

    //Ueberpruefung der Wandkollision
    const isCollisionWithWall = (head) => {
        if (head.x < 0 || head.x >= BOARD_WIDTH || head.y < 0 || head.y >= BOARD_HEIGHT) {
            return true;
        }

        return false;
    };

    //Wachstum der Schlange
    const growSnake = useCallback((newSnake) => {
        const tail = snake[snake.length - 1];
        newSnake.push(tail);
    }, [snake]);

    //Zuruecksetzen des Spieles
    const resetGame = useCallback(() => {
        setSnake(initialSnakeBody);
        setFood(generateFood());
        setDirection(null);
        setScore(0);
        setLastCheckScore(0);
        setLevel(0);
        setSpeed(INITIAL_SPEED);
    }, [generateFood]);

    // Bewegungslogik
    useEffect(() => {

        const move = () => {

            if (isPaused || !direction) {
                return;
            };

            const newSnake = moveSnake(snake, direction);
            const head = { ...newSnake[0] };

            if (head.x === food.x && head.y === food.y) {
                growSnake(newSnake)
                setScore(score => score + 1);
                setFood(generateFood());
            };

            if (isCollisionWithSelf(head, newSnake) || isCollisionWithWall(head)) {
                resetGame();
                return;
            };

            setSnake(newSnake);

        };

        const gameInterval = setInterval(move, speed);

        return () => clearInterval(gameInterval);
    }, [snake, direction, food, resetGame, speed, isPaused, generateFood, growSnake]);

    // Punktelogik
    useEffect(() => {
        if (score % LEVEL_UP_INTERVAL === 0 && score !== lastCheckScore) {
            setLevel(level => level + 1);
            setSpeed(prevSpeed => prevSpeed - LEVEL_UP_SPEED_REDUCTION);
            setLastCheckScore(score);
        };
    }, [lastCheckScore, score]);

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