import React from "react";
import Logo from "../assets/svgs/avatar.svg";
import { Link } from "react-router-dom";

const StartPage = () => {
  return (
    <div className="containerOuter">
      <div class="containerInner shadow-2xl">
        <h1 className="text-center text-[32px] font-semibold text-[#07080B]">
          Let’s capture your face biometric
        </h1>
        <div class="flex -mt-5 flex-col justify-between">
          <div className="flex justify-center">
            <img src={Logo} alt="checked-icon" className="w-20 h-40" />
          </div>
          <div>
            <h1 className="text-[20px] -mt-5 font-bold text-[#07080B] text-center mb-5">
              How to capture
            </h1>
            <div className="flex  justify-center mb-5">
              <p className="max-w-xs text-[#4A4C56] ">
                Find a well-lit spot so your webcam can see you clearly, then
                move your head in a circle to show all angles of your face.
              </p>
            </div>
            <div>
              <div class="block p-4 m-auto bg-white rounded-lg shadow w-72">
                <div class="w-full h-4 bg-gray-200 rounded-full mt-3">
                  <div class="w-3/4 h-full text-center text-xs text-white bg-primary rounded-full">
                    75%
                  </div>
                </div>
              </div>
            </div>

            <div className="flex mt-5 justify-center">
              <Link
                to={'/face-detector'}
                className="py-3 px-4 bg-primary hover:bg-primary focus:ring-primary focus:ring-offset-indigo-200 text-white w-1/2   transition ease-in duration-200 text-center text-sm font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg md:order-2"
              >
                Continue
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
