import Image from "next/image";
import React from "react";

const HeroUserCard = () => {
  return (
    <>
      <div className="min-h-[237px] w-[409px] rounded-[45px] bg-[linear-gradient(109.4deg,#FFFFFF_0%,#666666_41.42%)] p-1 ">
        <div className="h-full w-full rounded-[45px] bg-[#FFFFFF0D] backdrop-blur-[17px] pt-[37px] pl-[27px] ">
          <div className="flex gap-7 items-center justify-start ">
            {/* Image */}

            <div className="h-16 w-16 rounded-full  overflow-hidden">
              <Image
                src="/assets/user1.png"
                alt="Hero User Image"
                height={100}
                width={100}
                className="object-cover"
              />
            </div>

            {/* User name and rating  */}

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
            plants! They bring such a <br /> fresh and vibrant energy to my
            home.
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroUserCard;
