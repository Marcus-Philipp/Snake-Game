import React from 'react';

//Komponente, die waehrend einer Pause gerendert wird
const Pause = ({ isPaused }) => {

    return isPaused && (
        <div className="absolute bg-black bg-opacity-60 inset-0 min-h-screen flex justify-center items-center text-white text-4xl font-bold">
            <p>Pause</p>
        </div>
    );
};

export default Pause;