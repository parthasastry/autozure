import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="">
        <div className="relative">
          <div>
            <img
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1283&q=80"
              alt="car"
            />
          </div>

          <div className="absolute top-1/4 px-2 w-1/2 text-center">
            <div>
              <p className="text-xl md:text-2xl text-white py-2">
                Buying used car has never been this easy
              </p>
              <p className="text-sm md:text-xl text-white py-2">
                Autozure is a platform where buyers and sellers can safely and
                securely transact, at a minimal cost to buyer and seller
              </p>
            </div>

            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <Link to="/buy">Buy</Link>
            </button>
          </div>

          <div></div>
        </div>
      </div>
    </>
  );
};

export default Home;
