import React from "react";
import Navbar from "./Navbar";
import Display from "./display";
import { Outlet } from "react-router";

const Landing = () => {
  return (
    <div>
      <Navbar />
      
      <Outlet />
    </div>
  );
};

export default Landing;
