import React from 'react';
import image from '../../../image/toy marketplace.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img className='h-80 rounded' src={image} alt="" />
        <div className="lg:w-1/2 space-y-5 p-4">
            <h3 className="text-2xl font-bold text-red-600 mb-4">About Us</h3>
          <h1 className="w-2/3 text-5xl font-bold text-orange-800">TOY CARS</h1>
          <p className="py-6 w-4/5 text-xl text-[#737373]">
          A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.
          </p>         
        </div>
      </div>
    </div>
    );
};

export default About;