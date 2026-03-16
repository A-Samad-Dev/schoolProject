import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router";
import { SchoolContext } from "../Schoolcontext";
import SideNav from "../SideNav";
import Students from "./Students";

const Admin = () => {
  const { linkStyle } = useContext(SchoolContext);
  return (
    <div className="flex">
      <SideNav />
      <div className="flex-1">
       
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
