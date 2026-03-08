import React from "react";
import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { NavLink } from "react-router";
const Footer = () => {
  const linkStyle = ({ isActive }) =>
    `relative transition-all duration-200 inline-block
    ${
      isActive
        ? "text-red-500 after:w-full"
        : "text-black hover:text-red-500 after:w-0 hover:after:w-full"
    }
    after:content-[''] after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:bg-red-500 after:transition-all after:duration-200`;

  return (
    <footer className="w-full bg-red-200 px-[5%] py-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h1 className="flex items-center gap-2 text-xl font-bold">
              <GiGraduateCap className="text-red-900 text-3xl" />
              School Logo
            </h1>

            <p className="mt-4 text-sm leading-relaxed text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates impedit minus vel dicta distinctio perferendis nihil
              officiis.
            </p>

            <div className="flex gap-4 mt-5 text-red-600 text-lg">
              <FaFacebookF />
              <FaWhatsapp />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>

          <div>
            <h2 className="text-red-600 font-semibold text-lg mb-4">
              My Account
            </h2>

            <ul className="flex flex-col gap-3 text-sm">
              <NavLink to="/login" className={linkStyle}>
                Sign In
              </NavLink>
              <NavLink to="/dashboard" className={linkStyle}>
                Dashboard
              </NavLink>
              <NavLink to="/progress" className={linkStyle}>
                Monitor Progress
              </NavLink>
              <NavLink to="/contact" className={linkStyle}>
                Contact Us
              </NavLink>
            </ul>
          </div>
          <div>
            <h2 className="text-red-600 font-semibold text-lg mb-4">
              About School
            </h2>
            <ul className="flex flex-col gap-3 text-sm">
              <NavLink to="/about" className={linkStyle}>
                School Information
              </NavLink>
              <NavLink to="/about" className={linkStyle}>
                Resources
              </NavLink>
              <NavLink to="/about" className={linkStyle}>
                Our Success
              </NavLink>
              <NavLink to="/about" className={linkStyle}>
                Meet The Experts
              </NavLink>
            </ul>
          </div>

          <div>
            <h2 className="text-red-600 font-semibold text-lg mb-4">Support</h2>

            <ul className="flex flex-col gap-3 text-sm">
              <NavLink to="/contact" className={linkStyle}>
                Contact Us
              </NavLink>
            </ul>
          </div>
        </div>

        <div className="border-t mt-10 pt-6 text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} school namE. all rights....
        </div>
      </div>
    </footer>
  );
};
export default Footer;
