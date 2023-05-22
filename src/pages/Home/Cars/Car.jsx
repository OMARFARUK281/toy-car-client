import React, { useEffect, useState } from 'react';
import ToyCar from './ToyCar';

const Car = () => {

    const [toycars, setToycars] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/servicse')
        .then(res => res.json())
        .then(data => setToycars(data));
    }, [])

    return (
        <div>
            <h1 className='text-center font-bold text-6xl p-5'>TOY CARS BEST SELLERS</h1>
            <p className='text-center h-20 m-10 px-60 text-lg text-slate-400'>Remember how we used to play for hours building train tracks for our toy trains as a child? If you have loved playing with such things, your kids will love it too. Remote control trains and cars leave a sense of adventure and fun in every kid</p>
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