import React from "react";
import Image from "next/image";
import Link from "next/link";
const links = [
  { link: "#", name: "Home" },
  { link: "#", name: "Plant type" },
  { link: "#", name: "More" },
  { link: "#", name: "Contact" },
]
const Navbar = () => {
  return (
    <header className="fixed h-12 w-screen flex px-[39px] py-[57px] z-10">
      <nav className="flex  h-full w-full items-center justify-between ">
        {/* logo */}

        <Link href="/" className="flex gap-2">
          <Image
            src="/assets/logo.png"
            alt="FloraVision Logo"
            className="object-contain"
            height={48}
            width={48}
          />
          <span className=" font-black text-[28px] pt-2 opacity-70 text-[#FFFFFF]">
            FloraVision.
          </span>
        </Link>

        {/* options */}

        <ul className="flex text-[24px] gap-[70px]  items-center  text-[#FFFFFF] ">
          {links.map((li, i) => {
            return li.name === "Plant type" ? (
              <Link key={i} href={li.link}>
                <li className="flex items-start gap-5">
                  {li.name}
                  <Image
                    src="/assets/arrow-down.png"
                    alt="image"
                    height={7}
                    width={12}
                    className="mt-3.5"
                  />
                </li>
              </Link>
            ) : (
              <Link key={i} href={li.link}>
                <li>{li.name}</li>
              </Link>
            );
          })}


        </ul>

        {/* right icons */}

        <div className="flex items-center justify-center gap-[59px]">
          <button>
            <Image
              src="/assets/search.png"
              alt="Search Logo"
              className="object-contain"
              height={26}
              width={26}
            />
          </button>
          <button>
            <Image
              src="/assets/bag.png"
              alt="Bag Logo"
              className="object-contain"
              height={26}
              width={26}
            />
          </button>
          <button className="">
            <div className="flex flex-col items-end justify-center gap-2">
              <Image
                src="/assets/line1.png"
                alt="Line 1 Logo"
                className="object-contain"
                height={0}
                width={31}
              />
              <Image
                src="/assets/line2.png"
                alt="Line 2 Logo"
                className="object-contain"
                height={0}
                width={23}
              />
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
