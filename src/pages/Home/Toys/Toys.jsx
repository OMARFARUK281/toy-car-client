import React, { useEffect, useState } from "react";
import Toycars from "./toycars";


const Toys = () => {

    const [toycars, setToycars] = useState([]);

    useEffect( () => {
        fetch('toycars.json')
        .then(res => res.json())
        .then(data => setToycars(data));
    }, [])

  return (
    <div className='grid grid-col md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    toycars.map(toycar => <Toycars
                    key={toycar.id}
                    toycar={toycar}
                    ></Toycars> )
                }
            </div>
  );
};

export default Toys;
