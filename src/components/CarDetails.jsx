import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const CarDetails = () => {
  let { vin } = useParams();
  let carvin = vin.split(":")[1];

  const [car, setCar] = useState({});

  const url = `https://pgfdn219ai.execute-api.us-west-2.amazonaws.com/Dev/car?carvin=${carvin}`;

  const fetchCarDetails = async () => {
    const data = await axios.get(url);
    setCar(data.data);
  };

  useEffect(() => {
    fetchCarDetails();
  }, []);

  return (
    <>
      <div className="w-full p-20">
        <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold my-2 py-2 px-4 rounded text-center">
          <Link to="/buy">Go Back</Link>
        </button>
        <div>
          {car ? (
            <div>
              <div className="grid md:grid-cols-4 gap-3">
                <div>
                  <span className="font-bold">Car VIN: </span>
                  {car.vin}
                </div>
                <div>
                  <span className="font-bold">Make: </span>
                  {car.make}
                </div>
                <div>
                  <span className="font-bold">Model: </span>
                  {car.model}
                </div>
                <div>
                  <span className="font-bold">Year: </span>
                  {car.year}
                </div>
                <div>
                  <span className="font-bold">Price: $</span>
                  {car.price}
                </div>
                <div>
                  <span className="font-bold">Zipcode: </span>
                  {car.zipcode}
                </div>
              </div>

              {car.images ? (
                <div className="grid md:grid-cols-3 gap-3 pt-5">
                  {car.images.map((image, index) => {
                    return (
                      <div
                        key={index}
                        className="max-w-sm rounded overflow-hidden shadow-lg"
                      >
                        <img
                          src={image}
                          alt="car"
                          className="object-cover h-48 w-96"
                        />
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default CarDetails;
