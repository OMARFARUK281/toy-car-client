import React from "react";
import { useLoaderData } from "react-router-dom";

const BookOrder = () => {
  const servicse = useLoaderData();
  const { title, name, img, price, id } = servicse;

  return (
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">{name}</h2>
          <p>{title}</p>
          <h4 className="font-bold text-lg">$ {price}</h4>
        </div>
      </div>
     

  );
};

export default BookOrder;
