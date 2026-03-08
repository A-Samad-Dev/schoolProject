import React from "react";
import Navbar from "./Navbar";
import Display from "./display";
import { Outlet } from "react-router";
import Footer from "./Footer.Jsx";
const Landing = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Landing;
