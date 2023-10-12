import React from 'react';

const Level = ({ level }) => {
    return (
        <div className="bg-green-900 rounded-tr rounded-tl px-3 pt-1">
            <p className="text-lg font-bold text-white">Level: {level}</p>
        </div>
    );
};

export default Level;