import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [open, setopen] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setopen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className=" w-full sticky top-0 left-0 z-30 border-t-8 border-red-500 backdrop-blur-lg bg-white/60">
      <div className="flex justify-between px-2 md:px-3 py-3 items-center">
        <div className="flex items-center gap-x-1">
          <img src="src\assets\react.svg" alt="" className="size-8" />
          <h1 className="tracking-tighter md:tracking-normal">
            SamTex Public School
          </h1>
        </div>

        <div>
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
          <button className="bg-red-600 py-1 px-3 text-white rounded-sm">
            Apply Now
          </button>

          <button
            onClick={() => setopen(!open)}
            className=" md:hidden bg-red-500 py-2 px-3 rounded-sm"
          >
            <FaBars className="text-white" />
          </button>
        </div>
      </div>

      {open && (
        <div
          ref={menuRef}
          className="absolute top-13 right-0 md:hidden float-right mr-1 object-contain px-[3%] mt-3 bg-white shadow-lg rounded text-center overflow-hidden py-5 backdrop-blur-lg"
        >
          <ul className="flex flex-col gap-y-3">
            <NavLink to="/" onClick={() => setopen(false)}>
              Home
            </NavLink>

            <NavLink to="/about" onClick={() => setopen(false)}>
              About
            </NavLink>

            <NavLink to="/admissions" onClick={() => setopen(false)}>
              Admissions
            </NavLink>

            <NavLink to="/academics" onClick={() => setopen(false)}>
              Academics
            </NavLink>

            <NavLink to="/contact" onClick={() => setopen(false)}>
              Contact
            </NavLink>

            <NavLink to="/faq" onClick={() => setopen(false)}>
              FAQs
            </NavLink>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
