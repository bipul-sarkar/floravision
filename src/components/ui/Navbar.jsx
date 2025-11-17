import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="fixed h-12 w-screen flex px-[39px] py-[57px] z-10">
      <nav className="flex top-[57px]  left-[39px] h-full w-full items-center justify-between ">
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

        <ul className="flex text-[24px] gap-[70px] h-[35px] w-[531px] items-center justify-between text-[#FFFFFF] ">
          <li>
            <Link href="">Home</Link>
          </li>
          <li>
            <Link href="" className="flex gap-5">
              Plant Type
              <Image
                src="/assets/arrow-down.png"
                alt="Polygon Logo"
                className="object-contain"
                height={7}
                width={12}
              />
            </Link>
          </li>
          <li>
            <Link href="">More</Link>
          </li>
          <li>
            <Link href="">Contact</Link>
          </li>
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
