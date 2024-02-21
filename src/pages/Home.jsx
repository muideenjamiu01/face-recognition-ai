import React from "react";

import EnhancedIcon from "../assets/svgs/enhanced.svg";
import ReducedIcon from "../assets/svgs/reduced.svg";
import MindIcon from "../assets/svgs/mind.svg";
import exportIcon from "../assets/svgs/export.svg";

const Home = () => {
  return (
    <div className="containerOuter">
      <div class="containerInner shadow-2xl">
        <div class="w-full h-full text-center">
          <h1 className="text-center text-[32px] font-semibold text-[#07080B] mb-5">
            Welcome to Secure Verify
          </h1>
          <p className=" text-[#4A4C56] mb-8 text-base font-normal">
            Secure Verify uses your face to quickly verify your identity
            throughout the recruitment process, keeping your information safe
            and ensuring a fair competition.
          </p>
        </div>
        <div className="flex gap-6 mb-5 ">
          <div className="flex flex-col w-[148px] rounded-xl border border-[#E9E9EA] p-4 text-center">
            <div className="flex justify-center mb-4">
              <img
                src={EnhancedIcon}
                alt="checked-icon"
                className="w-10 h-10"
              />
            </div>
            <p className="text-sm font-semibold text-[#161721]">
              Enhanced Security
            </p>
          </div>
          <div className="flex flex-col w-[148px] rounded-xl border border-[#E9E9EA] p-4 text-center">
            <div className="flex justify-center mb-4">
              <img src={ReducedIcon} alt="checked-icon" className="w-10 h-10" />
            </div>
            <p className="text-sm font-semibold text-[#161721]">
              Reduced Friction
            </p>
          </div>
          <div className="flex flex-col w-[148px] rounded-xl border border-[#E9E9EA] p-4 text-center">
            <div className="flex justify-center mb-4">
              <img src={MindIcon} alt="checked-icon" className="w-10 h-10" />
            </div>
            <p className="text-sm font-semibold text-[#161721]">
              Peace of Mind
            </p>
          </div>
        </div>
        <div className="flex gap-10 justify-center mb-10">
          <p className="flex gap-2 items-center font-normal text-base text-[#0F1016]">
            How it works
            <img src={exportIcon} alt="checked-icon" className="w-4 h-4" />
          </p>
          <p className="flex gap-2 items-center font-normal text-base text-[#0F1016]">
            How we store your data{" "}
            <img src={exportIcon} alt="checked-icon" className="w-4 h-4" />
          </p>
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className="py-4 px-4 bg-primary hover:bg-primary focus:ring-primary focus:ring-offset-indigo-200 text-white w-1/2   transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg md:order-2"
          >
            Activate Secure Verify Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
