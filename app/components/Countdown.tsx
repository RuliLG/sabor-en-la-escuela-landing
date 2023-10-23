'use client';

import Countdown from 'react-countdown';

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    return (
        <div className="grid grid-cols-2 sm:flex mx-auto sm:justify-center">
            <div className="text-gray-600 text-center">
                <div className="mx-auto text-[#EC864A] bg-white shadow flex justify-center items-center text-3xl tabular-nums font-bold h-24 w-24 rounded-xl mb-2">
                    {days}
                </div>
                días
            </div>
            <div className="text-gray-600 text-center">
                <div className="mx-auto text-[#EC864A] bg-white shadow flex justify-center items-center text-3xl tabular-nums font-bold h-24 w-24 rounded-xl mb-2 sm:ml-4">
                    {hours}
                </div>
                horas
            </div>
            <div className="text-gray-600 text-center">
                <div className="mx-auto text-[#EC864A] bg-white shadow flex justify-center items-center text-3xl tabular-nums font-bold h-24 w-24 rounded-xl mb-2 sm:ml-4">
                    {minutes}
                </div>
                minutos
            </div>
            <div className="text-gray-600 text-center">
                <div className="mx-auto text-[#EC864A] bg-white shadow flex justify-center items-center text-3xl tabular-nums font-bold h-24 w-24 rounded-xl mb-2 sm:ml-4">
                    {seconds}
                </div>
                segundos
            </div>
        </div>
    );
};

export default function CountdownComponent() {
    return (
        <Countdown
            date={'2023-11-14 23:59:59'}
            renderer={renderer}
        />
    );
}
