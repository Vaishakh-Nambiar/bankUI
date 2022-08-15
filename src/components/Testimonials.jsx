import React from "react";
import "../index.css";
import { layout } from "../styles.js";
import { quotes } from "../assets/index";
import { feedback } from "../constants/index";

const Testimonials = () => {
  return (
    <section className={`ss:flex-row flex-col ss:p-8 p-2 w-full relative `}>
      <div className="info flex ss:flex-row flex-col ss:justify-around items-start ss:p-4 p-1 w-full ss:items-center">
        <h1 className="text-white font-semibold ss:text-[48px] text-[20px] ss:max-w-[50%] ss:px-6 px-2 ss:mx-4 mx-0  ss:my-1 my-4">
          What people are saying about us
        </h1>
        <p className="text-dimWhite ss:text-[18px] text-[15px]  ss:max-w-[50%]  ss:px-6 px-2 ss:mx-4 mx-0  ss:my-1 my-2">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div
        className={` feedback feedback-container flex flex-col ss:flex-row  w-[1/3] h-1/2 ss:p-12 p-2 `}
      >
        {feedback.map((e, i) => {
          const { id, content, name, title, img } = e;
          return (
            <div
              id={id}
              className="feedback-card basis-1/3 p-10 w-full ss:h-[400px] ss:mr-8 flex flex-col items-start justify-evenly rounded-xl  ss:my-1 my-4"
            >
              <img src={quotes} alt="" className="ss:my-1 my-4" />

              <p className="ss:text-[18px] text-[15px] text-white">{content}</p>
              <div className="flex ss:flex-row flex-col w-full justify-around ss:my-1 my-4">
                <div className="h-[48px] w-[48px] ">
                  <img src={img} alt="" className="" />
                </div>
                <div className="mr-4 ss:mt-1 mt-4">
                  <div className="text-white ">{name}</div>
                  <div className="text-dimWhite ">{title}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="pink__gradient absolute h-[60%] w-[40%] rounded-full top-0 -right-10 z-20"></div>
      <div className="blue__gradient absolute h-[40%] w-[60%] rounded-full -bottom-20 right-0 z-10"></div>
    </section>
  );
};

export default Testimonials;
