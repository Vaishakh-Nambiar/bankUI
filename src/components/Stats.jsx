import React from "react";
import "../index.css";
import { stats } from "../constants/index";

const Stats = () => {
  return (
    <div className="text-white py-4 ss:px-10  px-2 flex w-full items-center justify-evenly ss:flex-row flex-col">
      {stats.map((e, i) => {
        const { title, id, value } = e;
        // console.log(title);
        return (
          <div
            id={id}
            className="flex basis-1/3 items-center w-full ss:justify-evenly justify-evenly ss:my-0 my-2"
          >
            <h1 className="text-white ss:text-[30px]  text-[20px] font-semibold">
              {value}
            </h1>
            <span className="text-gradient ss:text-[20px] text-[15px] ">
              {title}
            </span>
            {/* <span
              className={`${
                i === stats.length - 1 ? `hidden` : `ml-4`
              } text-gradient text-[20px] `}
            >
              |
            </span> */}
          </div>
        );
      })}
    </div>
  );
};

export default Stats;
