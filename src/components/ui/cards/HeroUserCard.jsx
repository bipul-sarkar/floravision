import Image from "next/image";
import React from "react";

const HeroUserCard = () => {
  return (
    <>
      <div className="min-h-[237px] w-[409px] border rounded-[45px] border-t-[#FFFFFF]/50 border-l-[#FFFFFF]/50 border-b-[#666666] border-r-[#666666] bg-linear-to-br from-[#FFFFFF]/5 to-[#666666]/5 bg-clip-border  backdrop-blur-[17px]">
        <div className="flex gap-7 items-center justify-start mt-[37px] ml-[27px]">
          <div className="h-16 w-16 rounded-full  overflow-hidden">
            <Image
              src="/assets/user1.png"
              alt="Hero User Image"
              height={100}
              width={100}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-[5px]">
            <p className="text-[22px] text-[#FFFFFF]">Ronnie Hamill</p>
            <Image
              src="/assets/stars.png"
              height={15}
              width={103.5}
              alt="Stars"
            />
          </div>
        </div>
        <p className="ml-[25px] mt-6 text-[17px] text-[#FFFFFF] opacity-75">
          I can&apos;t express how thrilled I am with my <br /> new natural
          plants! They bring such a <br /> fresh and vibrant energy to my home.
        </p>
      </div>
    </>
  );
};

export default HeroUserCard;
