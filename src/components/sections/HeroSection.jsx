import Image from "next/image";
import React from "react";
import Button from "../ui/buttons/Button";
import LiveDemo from "../ui/buttons/LiveDemo";
import HeroUserCard from "../ui/cards/HeroUserCard";

const HeroSection = () => {
  return (
    <section>
      <div className="pt-46">
        <div className="grid grid-cols-2 px-[39px]">
          <div className="flex flex-col justify-between h-[700px]">
            <div>
              <p className=" w-[798px] h-[143px] text-[118px] opacity-75 font-semibold text-[#FFFFFF]">
                Earth&apos;s Exhale
              </p>
              <p className="pl-2 mb-[19px] pr-[15px] text-[23px] opacity-75 font-medium text-[#FFFFFF]">
                &quot;Earth Exhale&quot; symbolizes the purity and vitality of
                the Earth&apos;s natural <br />
                environment and its essential role in sustaining life.
              </p>

              <div className="flex items-center justify-start ">
                <Button>Buy Now</Button>
                <LiveDemo className="ml-[21px]" />
                <p className="my-[17px] ml-[19px] text-[#FFFFFF] text-[25px]">
                  Live Demo...
                </p>
              </div>
            </div>
            <HeroUserCard />
          </div>
          <div>
            {/* slider */}
            <div className="bg-red-400 w-[500px] h-[600px] place-self-end"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
