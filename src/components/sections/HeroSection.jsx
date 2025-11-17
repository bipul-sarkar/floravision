import Image from "next/image";
import React from "react";
import BuyNow from "../ui/buttons/BuyNow";
import LiveDemo from "../ui/buttons/LiveDemo";
import HeroUserCard from "../ui/cards/HeroUserCard";

const HeroSection = () => {
  return (
    <section className="h-screen bg-[url(/assets/background-photo.jpg)] bg-no-repeat bg-cover bg-top relative">
      {/* <Image
        src="/assets/background-photo.jpg"
        alt="Background Image"
        // height={2592}
        // width={1728}
        fill
        quality={100}
        className="object-cover"
      /> */}

      <div className=" w-[802px] top-40 left-4 absolute">
        <p className=" w-[798px] h-[143px] text-[118px] opacity-75 font-semibold text-[#FFFFFF]">
          Earth&apos;s Exhale
        </p>
        <p className="pl-2 mb-[19px] pr-[15px] text-[23px] opacity-75 font-medium text-[#FFFFFF]">
          &quot;Earth Exhale&quot; symbolizes the purity and vitality of the
          Earth&apos;s natural <br />
          environment and its essential role in sustaining life.
        </p>

        <div className="flex items-center justify-start ">
          <BuyNow />
          <LiveDemo className="ml-[21px]" />
          <p className="my-[17px] ml-[19px] text-[#FFFFFF] text-[25px]">
            Live Demo...
          </p>
        </div>
      </div>
      <HeroUserCard />
    </section>
  );
};

export default HeroSection;
