import React from "react";
import "../index.css";
import { layout } from "../styles.js";
import { clients } from "../constants/index";

const CTA = () => {
  return (
    <section className="flex flex-col  w-full ss:p-10 p-4 z-30">
      <div className="client flex p-4 w-full ss:mb-6 items-center justify-evenly ss:flex-row flex-col">
        {clients.map((e, i) => {
          const { id, logo } = e;
          return (
            <div className="flex items-center ss:max-w-lg  object-contain">
              <img
                src={logo}
                alt=""
                className="p-4  h-[75px] w-full object-contain"
              />
            </div>
          );
        })}
      </div>

      <div className="flex ss:justify-around items-center ss:p-10 p-4 bg-black-gradient-2 rounded-3xl mt-5 ss:flex-row flex-col ">
        <div className="p-6 ss:m-4 m-1">
          <h1 className="text-white font-semibold ss:text-[48px] text-[32px]">
            Let’s try our service now!
          </h1>
          <p className="text-dimWhite max-w-md mt-4 ss:text-[18px] text-[15px]">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <div className="">
          <button className="bg-blue-gradient p-4 px-8 rounded-xl w-fit font-semibold text-black ss:font-[18px] font-[15px] ss:mt-0 mt-2 ss:ml-0 ">
            Get started
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
