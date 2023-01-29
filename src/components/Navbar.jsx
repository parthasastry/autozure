import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  return (
    <>
      <nav>
        <div className="w-screen h-20 z-20 bg-[#64748B] fixed drop-shadow-lg">
          <div className="px-2 flex justify-between items-center w-full h-full text-white">
            <div className="flex justify-between items-center">
              <p>
                <Link to="/">
                  <span className="uppercase font-bold text-2xl">Autozure</span>
                </Link>
              </p>
            </div>
            <ul className="hidden uppercase md:px-20 md:flex">
              <li className="p-4">
                <Link to="/">Home</Link>
              </li>
              <li className="p-4">
                <Link to="/buy">Buy</Link>
              </li>
              <li className="p-4">
                <Link to="/sell">Sell</Link>
              </li>
            </ul>

            <div className="md:hidden mr-4" onClick={handleClick}>
              {!nav ? (
                <RxHamburgerMenu size={30} />
              ) : (
                <AiOutlineClose size={30} />
              )}
            </div>
          </div>

          <ul
            className={
              !nav
                ? "hidden"
                : "absolute bg-[#64748B] w-full px-8 text-white uppercase text-center md:hidden"
            }
          >
            <li className="p-4">
              <Link to="/" onClick={handleClose}>
                Home
              </Link>
            </li>
            <li className="p-4">
              <Link to="/buy" onClick={handleClose}>
                Buy
              </Link>
            </li>
            <li className="p-4">
              <Link to="/sell" onClick={handleClose}>
                Sell
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
