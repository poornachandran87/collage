
import React from "react";

const Divider = ({ title }) => {
  return (
    <div className=" relative">
      {/* Divider */}
      <div className="absolute inset-0 flex items-center">
        <div className="border border-slate-200 w-[250px] mx-auto"></div>
      </div>
      {/* Text */}
      <div className="flex justify-center items-center relative">
        <div className="font-display text-slate-600 pb-1  bg-white text-s px-4">
          {title}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Divider;