import React from "react";
import { useNavigate } from "react-router";
import { GiGraduateCap } from "react-icons/gi";

const Display = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div
        style={{
          background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("src/assets/kenny-eliason-zFSo6bnZJTw-unsplash.jpg") center center`,
          minHeight: "600px",
        }}
        className="w-full relative top-0 flex flex-col gap-4 justify-start px-10 pt-[5%] md:pt-[10%] bg-cover! bg-no-repeat text-white"
      >
        <h1 className="mt-30 md:mt-15 font-semibold text-white text-4xl ">
          Education is the Key <br />{" "}
          <span className="font-light">to success</span>
        </h1>
        <h2>making a positive impact in the future of the new Generation</h2>
        <h2>
          {" "}
          Everyday brings with it a fresh set of learning <br />{" "}
          possiblities{" "}
        </h2>
        <div className="flex gap-x-3 items-center ">
          <button
            onClick={() => navigate("/about")}
            className=" bg-red-500 px-5 rounded-sm py-2 hover:bg-white hover:text-red-500 transition all duration-500 hover:scale-110 "
          >
            {" "}
            Learn-More
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="  bg-white text-red-500  px-5 rounded-sm py-2 hover:bg-red-500 hover:text-white hover:scale-110  transition all duration-500 "
          >
            Contact-us
          </button>
        </div>
      </div>
      <div className=" items-center px-2 absolute top-140 md:bottom-40 flex flex-col gap-y-4 md:flex-row gap-x-20 md:justify-center left-25 right-25 ">
        <div className="px-5 bg-white shadow-lg rounded-md  ">
          <GiGraduateCap className=" text-red-900 size-12" />
          <h2 className="py-2  text-xl font-semibold ">Our Vision</h2>
          <p className=" border-b-3 border-red-500 w-15"></p>

          <p className="w-70 md:w-60 py-5 ">
            To create confident, capable and sound minded learners prepared for
            the future{" "}
          </p>
        </div>
        <div className="px-5 bg-white shadow-lg rounded-md  ">
          <GiGraduateCap className=" text-red-900 size-12" />
          <h2 className="py-2  text-xl font-semibold ">Our Vision</h2>
          <p className=" border-b-3 border-red-500 w-15"></p>

          <p className="w-70 md:w-60 py-5 ">
            To create confident, capable and sound minded learners prepared for
            the future{" "}
          </p>
        </div>
        <div className="px-5 bg-white shadow-lg rounded-md  ">
          <GiGraduateCap className=" text-red-900 size-12" />
          <h2 className="py-2  text-xl font-semibold ">Our Vision</h2>
          <p className=" border-b-3 border-red-500 w-15"></p>

          <p className="w-70 md:w-60 py-5 ">
            To create confident, capable and sound minded learners prepared for
            the future{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Display;
