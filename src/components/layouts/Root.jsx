import React from "react";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div>
      <div className="h-20">
        <NavBar></NavBar>
      </div>

      <ToastContainer></ToastContainer>

      <div className="min-h-[calc(100vh-300px)]">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Root;
