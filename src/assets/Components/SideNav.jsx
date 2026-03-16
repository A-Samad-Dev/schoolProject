import React, { useContext } from "react";
import { SchoolContext } from "./Schoolcontext";
import { NavLink } from "react-router";

const SideNav = () => {
  const { linkStyle } = useContext(SchoolContext);
  return (
    <div className="">
      {" "}
      <div className="min-w-40 p-[5%] bg-red-300/30 shadow-lg rounded-lg h-[100vh]">
        <ul className="flex flex-col gap-y-10">
          <NavLink to="/" className={linkStyle}>
            Home
          </NavLink>

          <NavLink to="/staff" className={linkStyle}>
            Staff
          </NavLink>

          {/* <NavLink to="/#" className={linkStyle}>
              Admissions
            </NavLink> */}

          <NavLink to="/admin/newstudent" className={linkStyle}>
            Add New Student
          </NavLink>

          <NavLink to="/admin" className={linkStyle}>
            Admin
          </NavLink>
        </ul>
      </div>
      <div className="flex-2"> </div>
    </div>
  );
};

export default SideNav;
