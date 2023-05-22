import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className=" display flex align-items: center bg-blue-50 rounded text-center">
      <h1 className="text-4xl p-5 w-96 text-left pl-8 text-orange-400 font-bold">TOYCAR</h1>

      <div className="p-5">
      <Link className="text-4xl m-5" to="/">Home</Link>
      <Link className="text-4xl m-5" to="/about">About</Link>
      <Link className="text-4xl m-5" to="/toycars">Toycars</Link>
      <Link className="text-4xl m-5" to="/login">Login</Link>
      </div>
      <div>
      
      </div>
    </div>
  );
};

export default NavBar;
