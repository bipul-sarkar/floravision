import Image from "next/image";
import Link from "next/link";
import React from "react";
const Links=[
  {name:"Home",href:"#"},
  {name:"Type's Of plant's",href:"#"},
  {name:"Contact",href:"#"},
  {name:"Privacy",href:"#"},
]
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
        <div className="flex flex-col items-center ">
          <h1 className="text-[28px] font-extrabold text-[#FFFFFF] ">
            Quick Link&apos;s
          </h1>
          <div className="flex flex-col gap-[26px] pl-2 pt-[46px] text-[#FFFFFF] text-[24px] font-medium underline">
            {Links.map((link)=>(
              <Link key={link.name} href={link.href}>{link.name}</Link>
            ))}
          </div>
        </div>

        {/* Updates  */}
        <div className="flex flex-col ">
          <h1 className="text-[28px] font-extrabold text-[#FFFFFF] text-start">
            For Every Update.
          </h1>
          <div className="flex border-2  border-[#FFFFFF] gap-1 p-0.5 mt-[50px] h-[74px]  rounded-lg">
            <input
              type="email"
              placeholder="Enter Email"
              className="h-full w-full pl-[29px] text-[#FFFFFF] text-[24px] py-[22px]  border-transparent outline-none opacity-75 font-medium"
            />
            <button className=" p-5 bg-[#FFFFFF] text-[22px] text-center rounded-lg text-[#000000] uppercase font-bold">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
