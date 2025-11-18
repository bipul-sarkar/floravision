import Image from "next/image";
import React from "react";
import Button from "../ui/buttons/Button";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";

const OurBestO2 = () => {
  return (
    <section className="min-h-screen bg-[#1c2416] px-[39px]">
      <div className="min-h-[1600px] min-w-[755px] bg-custom-gradient p-[3px] rounded-[92px]">
        <div className="h-full w-full rounded-[92px] bg-[#FFFFFF0D] grid grid-cols-2 ">
          <div className="">
            <Image
              src="/assets/BigPlant1.png"
              alt="Big Plant 1"
              height={877}
              width={877}
            />
          </div>
          <div className="flex flex-col gap-[42px] items-start pr-11 py-[135px] ">
            <h1 className="text-[38px] font-semibold opacity-75  text-[#FFFFFF]">
              We Have Small And Best O2 Plants <br />Collection&apos;s
            </h1>
            <h2 className="text-[28px] font-semibold opacity-75  text-[#FFFFFF]">
              Oxygen-producing plants, often referred to as &quot;O2 <br />
              plants,&quot;are those that release oxygen into the <br />
              atmosphere through the process of photosynthesis.
            </h2>
            <h2 className="text-[28px] font-semibold opacity-75  text-[#FFFFFF]">
              Many plants can help filter out pollutants and toxins <br />
              from the air, such as formaldehyde, benzene, and <br />
              trichloroethylene. This makes the air cleaner and <br />healthier to
              breathe.
            </h2>

            <div className="flex w-full justify-between">
              <Button>Explore</Button>
              <div className="flex justify-between text-[#FFFFFF] items-center ">
                <RxCaretLeft className="h-10 w-10 opacity-35" />
                <p className="opacity-75 text-[20px]">
                  01/
                  <span className="text-[15px]">04</span>
                </p>
                <RxCaretRight className="h-10 w-10 opacity-75" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBestO2;
