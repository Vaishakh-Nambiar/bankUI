import React from "react";
import "../index.css";
import { layout } from "../styles.js";
import { card } from "../assets/index";

const CardDeal = () => {
  const { section } = layout;
  return (
    <section className={`${section} flex flex-col w-full relative`}>
      <div className="basis-1/2 ss:px-6 px-1 flex ss:justify-start justify-center">
        <div className="ss:px-6 px-1 h-[100%] flex flex-col justify-center w-[75%]">
          <h1 className="text-white font-semibold ss:text-[48px] text-[20px] my-3">
            Find a better card deal in few easy steps.
          </h1>
          <p className="text-dimWhite  my-3 ss:text-[18px] text-[15px]">
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
            aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>
          <button className="bg-blue-gradient p-4 px-8 rounded-xl w-fit font-semibold text-black ss:font-[18px] font-[15px] ss:mt-0 mt-2 ss:ml-0 ">
            Get started
          </button>
        </div>
      </div>
      <div className="flex items-center basis-1/2  p-4">
        <img src={card} alt="bill" className="p-8" />
      </div>
      {/* <div className="pink__gradient absolute h-[60%] w-[30%] top-10 left-10 z-10"></div> */}
      <div className="white__gradient absolute h-[40%] w-[20%] top-10 left-10 z-10"></div>
      <div className="pink__gradient absolute h-[30%] w-[30%] top-30 left-0 z-10"></div>
      <div className="blue__gradient absolute h-[60%] w-[40%] rounded-full bottom-0 -right-10 z-10"></div>
    </section>
  );
};

export default CardDeal;
