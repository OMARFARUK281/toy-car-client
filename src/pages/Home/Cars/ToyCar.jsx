import { FaStar } from "@react-icons/all-files/fa/FaStar";
import { Link } from "react-router-dom";


const ToyCar = ({toycar}) => {

    const {_id, name, title, img, price } = toycar;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className=" h-100 rounded" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl mb-5">{name}</h2>
        <p>{title}</p>
        <div className="flex align-items-center">
        <p className="font-bold">Price: $ {price}</p>
        <div className="flex pr-12 text-yellow-400 m-2 mb-5">
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        </div>
        </div>
          <Link to={`bookorder/${_id}`}>
          <button className="btn bg-green-500 hover:bg-green-700 border-none">Order Now</button>
          </Link>
       
      </div>
    </div>
  );
};

export default ToyCar;
