import React, { useState } from "react";
import { logo, close, menu } from "../assets";
import "../index.css";
import { navLinks } from "../constants/index";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar z-[5] ">
      <img src={logo} className="w-[124px] h-[32px]" />
      <ul className="text-white  list-none sm:flex hidden relative z-50">
        {navLinks.map((link, id) => {
          console.log(link);
          return (
            <li
              key={id}
              id={id}
              className={id === navLinks.length - 1 ? `mr-0` : `mr-3 `}
            >
              <a href={`#${link.id}`} className="cursor-pointer z-50">
                {link.title}
              </a>
            </li>
          );
        })}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center ">
        <img
          src={toggle ? close : menu}
          onClick={() => setToggle((prev) => !prev)}
          className="object-contain cursor pointer w-[28px] h-[28px]"
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar text-white list-none flex-col justify-center z-30`}
        >
          {navLinks.map((link, id) => {
            return (
              <li
                key={id}
                className={id === navLinks.length - 1 ? `mb-0` : `mb-3`}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
