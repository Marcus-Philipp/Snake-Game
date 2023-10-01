import React from 'react';

const HighScore = ({ score }) => {

   return (
    <div>
        <p className="text-lg font-bold">Highscore: {score}</p>
    </div>
   );
};

export default HighScore;