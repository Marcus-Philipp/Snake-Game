import React from 'react';

//Komponente zur Anzeige des aktuellen Levels
const Level = ({ level }) => {
    return (
        <div className="bg-green-900 pt-1">
            <p className="text-lg font-bold text-white">Level: {level}</p>
        </div>
    );
};

export default Level;