import React from "react";

const Toycars = ({toycar}) => {

    const { name, title, img } = toycar;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className=" h-100 rounded" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl mb-5">{name}</h2>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Toycars;
