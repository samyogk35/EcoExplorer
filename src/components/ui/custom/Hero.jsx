import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="flex flex-col items-center mx-56 gap-9">
      <h1 className="front-extrabold text-[50px] text-center mt-16">
        <span className="text-[#6ec56b]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </span>
        <p className="text-xl text-gray-500 text-center">
          Dicta, ad quae facilis odio mollitia labore aperiam id quasi ipsa
          omnis nesciun voluptates tempora nam ex atque recusandae ab culpa
          nihil?
        </p>
      </h1>
      <Link to={"/create-trip"}>
        <button className="bg-[#6ec56b] text-white py-3 px-6 rounded-lg">
          Get Started
        </button>
      </Link>
    </div>
  );
}
export default Hero;
