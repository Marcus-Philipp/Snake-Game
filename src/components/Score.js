import React from 'react';

const HighScore = ({ score }) => {

   return (
    <div className="bg-green-900 rounded-tr rounded-tl px-3 pt-1">
        <p className="text-lg font-bold text-white">Highscore: {score}</p>
    </div>
   );
};

export default HighScore;