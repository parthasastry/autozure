import React, { useState, useEffect } from "react";
import axios from "axios";
import Car from "./Car";

const Buy = () => {
  const [cars, setCars] = useState([]);

  const url =
    "https://pgfdn219ai.execute-api.us-west-2.amazonaws.com/Dev/usedcars";

  const fetchCars = async () => {
    const data = await axios.get(url);
    setCars(data.data);
    console.log("data: ", cars);
  };

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <>
      <div className="w-full flex flex-col justify-between pt-20 h-full">
        <div className="font-bold text-2xl text-center">
          Search for used cars
        </div>
        <div className="grid md:grid-cols-3 gap-3 m-2">
          {cars
            ? cars.map((car, index) => (
                <div key={index}>
                  <Car value={car} />
                </div>
              ))
            : null}
        </div>
      </div>
    </>
  );
};

export default Buy;
