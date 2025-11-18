import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="min-h-[755px] bg-[#1c2416] px-[39px] pt-[404px]">
      <div className="grid grid-cols-3 ">
        <div className="flex flex-col ">
          {/* Image  and Logo  */}
          <div className="h-[94px] w-[378px]  flex gap-[13px] items-center justify-start ">
            <Image
              src="/assets/logo_2.png"
              alt="FloraVision Logo"
              height={94}
              width={94}
            />
            <span className="font-black text-[45px] pt-2 opacity-75 text-[#FFFFFF]">
              FloraVision.
            </span>
          </div>

          <p className="text-start text-[#FFFFFF] font-medium text-[28px]  pt-[43px] ">
            &quot;From lush indoor greens to vibrant <br /> outdoor blooms, our
            plants are crafted to <br /> thrive and elevate your living
            environment.&quot;
          </p>
        </div>
        {/* Quick Links  */}
        <div className="flex flex-col text-center ">
          <h1 className="text-[28px] font-extrabold text-[#FFFFFF] ">
            Quick Link&apos;s
          </h1>
          <div className="flex flex-col gap-[26px] pt-[46px] text-[#FFFFFF] text-[24px] font-medium underline">
            <p>Home</p>
            <p>Type&apos;s Of plant&apos;s</p>
            <p>Contact</p>
            <p>Privacy</p>
          </div>
        </div>

        {/* Updates  */}
        <div className="flex flex-col ">
          <h1 className="text-[28px] font-extrabold text-[#FFFFFF] text-start">
            For Every Update.
          </h1>
          <div className="flex border-2 border-[#FFFFFF] gap-1 p-0.5 mt-[50px] h-[74px] w-[562px] rounded-lg">
            <input
              type="email"
              placeholder="Enter Email"
              className="h-full w-full text-[#FFFFFF] text-[24px] py-[22px] pl-[29px] border-transparent outline-none opacity-75 font-medium"
            />
            <button className="h-[64.89px] w-[165.08px] p-5 bg-[#FFFFFF] text-[22px] text-center rounded-lg text-[#000000] uppercase font-bold">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
