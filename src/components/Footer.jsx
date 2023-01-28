import React from "react";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="w-full flex flex-col justify-between text-center bg-zinc-200 ">
        <div className="w-full flex justify-around">
          <div className="text-sm p-4">
            <span className="font-bold uppercase">Autozure</span> Used Car
            Marketplace
          </div>
          <div>
            <ul className="flex justify-around">
              <li className="p-4">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillFacebook size={30} />
                </a>
              </li>
              <li className="p-4">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillLinkedin size={30} />
                </a>
              </li>
              <li className="p-4">
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillTwitterSquare size={30} />
                </a>
              </li>
              <li className="p-4">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillInstagram size={30} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-sm py-2">
          All rights reserved. &copy;{currentYear} Vivek Amble & Partha Sastry
        </p>
      </div>
    </>
  );
};

export default Footer;
