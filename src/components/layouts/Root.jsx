import React from "react";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div>
      <div className="h-20">
        <NavBar></NavBar>
      </div>

      <ToastContainer></ToastContainer>

      <Outlet></Outlet>
    </div>
  );
};

export default Root;
