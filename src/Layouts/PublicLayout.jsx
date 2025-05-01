import React from "react";
import { Outlet } from "react-router-dom";

function PublicLayout() {
  return (
    <div className="w-screen h-screen flex flex-row bg-bg justify-center items-center overflow-hidden p-10 gap-5">
      <div className="w-full lg:w-3/5 xl:w-2/5 h-full">
        <Outlet />
      </div>
      <div className="hidden lg:flex w-2/5 xl:w-3/5 h-full bg-primary rounded-4xl items-center justify-center  before:w-20 before:h-20 before:rounded-4xl before:absolute before:right-16 before:top-16 before:flex before:bg-bg">
        <img
          src="/Emojis.svg"
          alt="Image"
          className="w-1/2"
          draggable="false"
        />
      </div>
    </div>
  );
}

export default PublicLayout;
