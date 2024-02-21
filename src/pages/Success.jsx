import React from "react";
import Logo from "../assets/svgs/Checked_Icon.svg";

const Success = () => {
  return (
    <div className="containerOuter">
      <div class="containerInner shadow-2xl">
        <h1 className="text-center text-[32px] font-semibold text-[#59C73E]">
          Secure Verify Activated!
        </h1>
        <div class="flex flex-col justify-between">
          <div className="flex justify-center">
            <img src={Logo} alt="checked-icon" className="w-32 h-40" />
          </div>
          <div>
            <h1 className="text-[20px] font-bold text-[#07080B] text-center mb-5">
              Your face is now your secure passport.
            </h1>
            <div className="flex  justify-center mb-5">
              <p className="max-w-xs text-[#4A4C56] ">
                Use it to breeze through applications, tests, and assessments
                with ease
              </p>
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                className="py-4 px-4 bg-primary hover:bg-primary focus:ring-primary focus:ring-offset-indigo-200 text-white w-1/2   transition ease-in duration-200 text-center text-sm font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg md:order-2"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
