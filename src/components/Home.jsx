import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-between pt-20">
        <div className="grid md:grid-cols-3">
          <div className="flex flex-col justify-center align-items md:items-start w-full col-span-1 pl-2">
            <p className="uppercase text-4xl">Autozure</p>
            <p className="text-3xl">Buying used car has never been this easy</p>
            <p className="py-2 text-2xl italic">
              A platform where one can safely and securely transact, at a
              minimal cost to both individual buyer and seller
            </p>
          </div>
          <div className="col-span-2">
            <img
              src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
