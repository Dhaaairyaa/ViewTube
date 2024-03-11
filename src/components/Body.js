import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex ">
      <Sidebar></Sidebar>
      <div className="mt-[70px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
