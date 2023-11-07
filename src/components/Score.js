import React from 'react';

//Komponente zur Anzeige des Highscores
const HighScore = ({ score }) => {

   return (
    <div className="bg-green-900 pt-1">
        <p className="text-lg font-bold text-white">Highscore: {score}</p>
    </div>
   );
};

export default HighScore;