import React from "react";
import { IoPlay } from "react-icons/io5";



const LiveDemo = ({ className = "" }) => {
  return (
    <>
      <button className={`h-[70px] w-[70px] border-2 text-[#FFFFFF] rounded-full overflow-hidden ${className}`}>
        <IoPlay className="h-[34px] w-[34px] m-[18px] opacity-75" />
      </button>
    </>
  );
};

export default LiveDemo;
