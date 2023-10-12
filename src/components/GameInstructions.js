import React from 'react';

const GameInstructions = () => {

    return (
        <div className="pt-5">
            <ul className="border-[16px] border-gray-900 bg-green-800 text-white p-6 rounded-lg">
                <li className="font-bold text-lg pb-3 underline">Steuerung der Schlange</li>
                <li className="grid grid-cols-2 gap-x-8 pl-8"><span>Oben</span><span>↑</span></li>
                <li className="grid grid-cols-2 gap-x-8 pl-8"><span>Unten</span><span>↓</span></li>
                <li className="grid grid-cols-2 gap-x-8 pl-8"><span>Rechts</span><span>→</span></li>
                <li className="grid grid-cols-2 gap-x-8 pl-8"><span>Links</span><span>←</span></li>
                <li className="grid grid-cols-2 gap-x-8 pl-8"><span>Leertaste</span><span>Pause</span></li>
            </ul>
        </div>
    );
};

export default GameInstructions;