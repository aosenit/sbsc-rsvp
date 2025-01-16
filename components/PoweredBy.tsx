import React from "react";
import logo from "@/assets/images/sbsclogo.png";

export const PoweredBy = () => {
  return (
    <div className="flex gap-1 items-center h-[50px]">
      <h3 className="text-lg text-[#595D62]">powered by</h3>
      <img
        src={logo.src}
        alt="logo"
        className="w-[60px] h-[40px] object-contain"
      />
    </div>
  );
};