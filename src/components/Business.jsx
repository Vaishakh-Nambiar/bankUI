import React from "react";

import "../index.css";
import { layout } from "../styles.js";
import { features } from "../constants";

const Business = () => {
  console.log(layout.section);
  return (
    <section
      className={`text-white flex ss:p-4 p-2 w-full ${layout.section} items-center h-screen relative ss:mb-4 mb-10`}
    >
      <div className="flex basis-1/2 flex-start justify-evenly flex-col px-6 h-full ">
        <div className=" ss:px-0 px-2">
          <h1 className="ss:text-[48px] text-[20px] font-semibold text-white flex flex-col my-4">
            You do the business,
            <span>we’ll handle the money.</span>
          </h1>

          <p className="ss:font-[20px] font-[12px] text-gray-400 leading-7 text-left break-normal">
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </p>
        </div>
        <button className="bg-blue-gradient p-4 px-8 rounded-xl w-fit font-semibold text-black ss:font-[18px] font-[15px] ss:mt-0 mt-2 ss:ml-0 ml-2">
          Get started
        </button>
      </div>

      <div className="flex basis-1/2 justify-evenly h-full flex-col items-center py-4 ss:px-8 px-2 z-20">
        {features.map((e, i) => {
          const { id, icon, title, content } = e;
          return (
            <div className=" flex w-[100%] py-8 ss:px-4 px-1 justify-evenly items-center feature-card rounded-xl">
              <div className="p-4">
                <div className="h-[64px] w-[64px] rounded-full bg-black-gradient-2 flex justify-center items-center ">
                  <img src={icon} className="h-[32px] w-[32px]" />
                </div>
              </div>

              <div className="flex flex-col h-[100%] items-start justify-center">
                <h3 className="text-white font-semibold ss:text-[18px] text-[15px]">
                  {title}
                </h3>
                <p className=" text-dimWhite ss:text-[15px] text-[12px]">
                  {content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute bottom-20 ss:-left-10 blue__gradient p-4 h-[40%] w-[30%] "></div>
      <div className="absolute -bottom-10 -left-10 white__gradient p-6 h-[40%] w-[30%] "></div>
      <div className="absolute -bottom-5 -left-10 pink__gradient p-6 h-[20%] w-[30%] "></div>
    </section>
  );
};

export default Business;
