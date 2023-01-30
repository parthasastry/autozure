import React from "react";
import { Link } from "react-router-dom";
import numberFormat from "../utilities";

const Car = ({ value }) => {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={value.images[0]} alt="car" />
        <div className="px-6 py-4 text-center">
          <div className="font-bold text-xl mb-2">
            {value.make} {value.model} {value.year}
          </div>
          <p>{numberFormat(value.price)}</p>
          <p>Zipcode - {value.zipcode}</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 rounded text-center">
            <Link to={`/buy:${value.vin}`}>Details</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Car;
