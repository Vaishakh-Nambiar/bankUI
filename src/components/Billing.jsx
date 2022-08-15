import React from "react";

import "../index.css";
import { layout } from "../styles.js";
import { features } from "../constants";
import { bill, google, apple } from "../assets/index";

const Billing = () => {
  const { section } = layout;
  return (
    <section
      className={`${section} flex flex-col w-full  relative ss:mt-2 mt-10`}
    >
      <div className="flex items-center basis-1/2  p-4">
        <img src={bill} alt="bill" className="p-8" />
      </div>
      <div className="basis-1/2  ss:px-6 px-1 flex ss:justify-end justify-center">
        <div className="ss:px-6 px-2 h-[100%] flex flex-col justify-center w-[75%]">
          <h1 className="text-white font-semibold ss:text-[48px] text-[24px] my-3">
            Easily control your billing & invoicing.
          </h1>
          <p className="text-dimWhite  my-3">
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </p>
          <div className="tags flex my-3 z-30 ss:flex-row flex-col">
            <img src={apple} alt="" className="h-[42px] w-[128px]" />
            <img src={google} alt="" className="h-[42px] w-[128px]" />
          </div>
        </div>
      </div>
      <div className="pink__gradient absolute h-[60%] w-[20%] top-10 left-10 z-10"></div>
    </section>
  );
};

export default Billing;
