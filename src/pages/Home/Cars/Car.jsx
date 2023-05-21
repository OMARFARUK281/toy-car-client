import React, { useEffect, useState } from 'react';
import ToyCar from './ToyCar';

const Car = () => {

    const [toycars, setToycars] = useState([]);

    useEffect( () => {
        fetch('toycars.json')
        .then(res => res.json())
        .then(data => setToycars(data));
    }, [])

    return (
        <div>
            <h1 className='text-center text-6xl p-5'>TOY CARS</h1>
            <div className='grid grid-col md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    toycars.map(toycar => <ToyCar
                    key={toycar.id}
                    toycar={toycar}
                    ></ToyCar> )
                }
            </div>
        </div>
    );
};

export default Car;