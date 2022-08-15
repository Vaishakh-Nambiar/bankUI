import React from "react";
import styles from "../styles";
import { discount, robot, arrowUp } from "../assets";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col bg-black ${styles.paddingY}  sm:px-5 px-2`}
    >
      <div className="heroText flex flex-start flex-col basis-1/2 justify-center z-20 px-4 ">
        <div className="discount px-4 py-2 flex items-center rounded bg-discount-gradient max-w-fit ">
          <img src={discount} alt="discount" />
          <p
            className={`uppercase ${styles.paragraph} text-gray-500 ss:text-[20px] text-[12px]`}
          >
            <span className="text-white mx-1 ss:text-[20px] text-[12px]">
              20%
            </span>
            discount for
            <span className="text-white mx-1 sm:text-[20px] text-[12px]">
              1 month
            </span>
            account
          </p>
        </div>

        <div className=" flex md:flex-row justify-between items-center w-full">
          <h1 className="flex flex-col ss:text-[72px] text-[42px] font-semibold text-white mr-5">
            The Next
            <span className={`text-gradient `}>Generation</span>
          </h1>
        </div>
        <h1 className="flex flex-col font-semibold text-white mr-5 ss:text-[72px] text-[42px]">
          Payment Method.
        </h1>
        <p className="text-gray-300 max-w-[75%] my-3 mr-3">
          Our team of experts use a methodology to idnetify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees
        </p>
      </div>
      <div className="imgRobo flex items-center basis-1/2 z-20 ss:-mt-0 mt-4">
        <img src={robot} alt="" className="mr-0 " />
      </div>

      {/* <div className="bg-black-gradient absolute top-10 left-[-150px]  px-4  w-[50%] h-[100%] z-[3] blur-xl rounded-full"></div> */}

      <div className="blue__gradient absolute top-5 right-[100px]  px-4  w-[50%] h-[100%]  rounded-full z-10"></div>
      <div className="pink__gradient absolute top-2 right-[100px]  px-4  w-[30%] h-[100%]  rounded-full  z-10"></div>
    </section>
  );
};

export default Hero;
