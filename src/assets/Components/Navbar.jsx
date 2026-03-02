import React, { useState } from "react";
import { NavLink } from "react-router";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [open, setopen] = useState(null);
  return (
    <div className=" w-full sticky top-0 left-0 z-30  bg-red-500 pt-2 backdrop-blur-xl mb-2  ">
      <div className="flex bg-white justify-between px-2 md:px-3 py-3 items-center ">
        {" "}
        <div className="flex items-center gap-x-1 ">
          <img src="src\assets\react.svg" alt="" className="size-8" />
          <h1 className="tracking-tighter md:tracking-normal">
            SamTex Public School
          </h1>
        </div>
        <div className="">
          <ul className="hidden md:inline-flex gap-x-10">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative transition-all duration-200
     ${
       isActive
         ? "text-red-500 after:w-full"
         : "text-black hover:text-red-500 after:w-0 hover:after:w-full"
     }
     after:content-[''] after:absolute after:left-0 after:-bottom-1
     after:h-0.5 after:bg-red-500 after:transition-all after:duration-200`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `relative transition-all duration-200
     ${
       isActive
         ? "text-red-500 after:w-full"
         : "text-black hover:text-red-500 after:w-0 hover:after:w-full"
     }
     after:content-[''] after:absolute after:left-0 after:-bottom-1
     after:h-0.5 after:bg-red-500 after:transition-all after:duration-200`
              }
            >
              About
            </NavLink>
            <NavLink
              to={"/admissions"}
              className={({ isActive }) =>
                `relative transition-all duration-200
     ${
       isActive
         ? "text-red-500 after:w-full"
         : "text-black hover:text-red-500 after:w-0 hover:after:w-full"
     }
     after:content-[''] after:absolute after:left-0 after:-bottom-1
     after:h-0.5 after:bg-red-500 after:transition-all after:duration-200`
              }
            >
              Admissions
            </NavLink>
            <NavLink
              to={"/academics"}
              className={({ isActive }) =>
                `relative transition-all duration-200
     ${
       isActive
         ? "text-red-500 after:w-full"
         : "text-black hover:text-red-500 after:w-0 hover:after:w-full"
     }
     after:content-[''] after:absolute after:left-0 after:-bottom-1
     after:h-0.5 after:bg-red-500 after:transition-all after:duration-200`
              }
            >
              Academics
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                `relative transition-all duration-200
     ${
       isActive
         ? "text-red-500 after:w-full"
         : "text-black hover:text-red-500 after:w-0 hover:after:w-full"
     }
     after:content-[''] after:absolute after:left-0 after:-bottom-1
     after:h-0.5 after:bg-red-500 after:transition-all after:duration-200`
              }
            >
              Contact
            </NavLink>
            <NavLink
              to={"/faq"}
              className={({ isActive }) =>
                `relative transition-all duration-200
     ${
       isActive
         ? "text-red-500 after:w-full"
         : "text-black hover:text-red-500 after:w-0 hover:after:w-full"
     }
     after:content-[''] after:absolute after:left-0 after:-bottom-1
     after:h-0.5 after:bg-red-500 after:transition-all after:duration-200`
              }
            >
              FAQs
            </NavLink>
          </ul>
        </div>
        <div className="relative flex gap-x-4 items-center">
          <button className="bg-red-600 p-1 text-white rounded-sm ">
            Apply Now
          </button>
          <button
            onClick={() => setopen(!open)}
            className=" md:hidden bg-red-500 py-2 px-3 rounded-sm "
          >
            <FaBars />
          </button>
        </div>
      </div>
      {open && (
        <div className="absolute top-13 right-0 md:hidden float-right mr-1 w-[33%] mt-3 bg-white shadow-lg rounded text-center overflow-hidden py-5 backdrop-blur-lg">
          <ul className="flex flex-col gap-y-3  ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative transition-all duration-200
     ${
       isActive
         ? "text-red-500 after:w-full bg-red-100"
         : "text-black hover:text-red-500 after:w-0 hover:after:w-full"
     }
     after:content-[''] after:absolute after:left-0 after:-bottom-1
     after:h-0.5 after:bg-red-500 after:transition-all after:duration-200`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `relative transition-all duration-200
     ${
       isActive
         ? "text-red-500 after:w-full bg-red-100"
         : "text-black hover:text-red-500 after:w-0 hover:after:w-full"
     }
     after:content-[''] after:absolute after:left-0 after:-bottom-1
     after:h-0.5 after:bg-red-500 after:transition-all after:duration-200`
              }
            >
              About
            </NavLink>
            <NavLink
              to={"/admissions"}
              className={({ isActive }) =>
                `relative transition-all duration-200
     ${
       isActive
         ? "text-red-500 after:w-full bg-red-100"
         : "text-black hover:text-red-500 after:w-0 hover:after:w-full"
     }
     after:content-[''] after:absolute after:left-0 after:-bottom-1
     after:h-0.5 after:bg-red-500 after:transition-all after:duration-200`
              }
            >
              Admissions
            </NavLink>
            <NavLink
              to={"/academics"}
              className={({ isActive }) =>
                `relative transition-all duration-200
     ${
       isActive
         ? "text-red-500 after:w-full bg-red-100"
         : "text-black hover:text-red-500 after:w-0 hover:after:w-full"
     }
     after:content-[''] after:absolute after:left-0 after:-bottom-1
     after:h-0.5 after:bg-red-500 after:transition-all after:duration-200`
              }
            >
              Academics
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                `relative transition-all duration-200
     ${
       isActive
         ? "text-red-500 after:w-full bg-red-100"
         : "text-black hover:text-red-500 after:w-0 hover:after:w-full"
     }
     after:content-[''] after:absolute after:left-0 after:-bottom-1
     after:h-0.5 after:bg-red-500 after:transition-all after:duration-200`
              }
            >
              Contact
            </NavLink>
            <NavLink
              to={"/faq"}
              className={({ isActive }) =>
                `relative transition-all duration-200
     ${
       isActive
         ? "text-red-500 after:w-full bg-red-100"
         : "text-black hover:text-red-500 after:w-0 hover:after:w-full"
     }
     after:content-[''] after:absolute after:left-0 after:-bottom-1
     after:h-0.5 after:bg-red-500 after:transition-all after:duration-200`
              }
            >
              FAQs
            </NavLink>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
