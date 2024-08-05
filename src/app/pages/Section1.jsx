import React from "react";
import { GiBurningTree } from "react-icons/gi";
import { LuLinkedin } from "react-icons/lu";
import { VscGithubAlt } from "react-icons/vsc";
import { FaFacebookF } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaXTwitter } from "react-icons/fa6";

import { JetBrains_Mono, Sancreek } from "next/font/google";
import Image from "next/image";

const Sancreekk = Sancreek({
  subsets: ["latin"], // You can specify the subsets you need
  weight: "400", // Specify the weights you need
  style: "normal", // Specify the style you need
});

export default function Section1() {
  return (
    <div className="relative min-h-[130vh] ">
      <nav className="flex justify-between items-center px-8  py-6 text-white">
        {/* BELOW CODE FOR MOBILE VERSION */}
        <div className="flex lg:hidden justify-between items-center w-full">
          <p>
            <RxHamburgerMenu size={45} />
          </p>
          <p className={`${Sancreekk.className} text-5xl`}>TALHA</p>
        </div>
        {/* above CODE FOR MOBILE VERSION */}

        <div className="lg:flex items-center gap-7 pl-10 hidden">
          <p>
            <RxHamburgerMenu size={25} />
          </p>
          <p>
            <LuLinkedin size={25} />
          </p>
          <p>
            <VscGithubAlt size={25} />
          </p>
          <p>
            <FaFacebookF size={25} />
          </p>
          <p>
            <FaXTwitter size={25} />
          </p>
        </div>
        <div className="hidden lg:flex gap-6">
          <button className="bg-darkOrange px-[24px] py-[12px] rounded-[22px] cursor-pointer hover:bg-black hover:text-darkOrange transition-all duration-300 ease-in-out relative z-[2] ">
            CART
          </button>
          <button className="bg-darkOrange px-[24px] py-[12px] rounded-[22px] cursor-pointer hover:bg-black hover:text-darkOrange transition-all duration-300 ease-in-out relative z-[2]">
            ORDER NOW
          </button>
        </div>
        <div className="absolute  top-5 right-0 left-0 bottom-0 p-0 hidden lg:flex justify-center items-center h-[125px] flex-nowrap pointer-events-none">
          <div className=" ">
            <div className="relative w-64 h-64">
              <Image
                src="/title.svg"
                alt="Logo"
                layout="fill"
                objectFit="contain"
                
              />
            </div>
          </div>
        </div>
      </nav>
      <div className="hidden  fixed left-0 h-[200px] w-[60px] top-[calc(50%-200px/2)] lg:flex justify-center items-center flex-nowrap overflow-hidden p-0 bg-darkOrange rounded-br-tr-20">
        <div className="outline-none flex flex-col justify-start flex-shrink-0 -rotate-90">
          <p className="text-white font-sans font-semibold tracking-wide text-xl">
            ORDER NOW!
          </p>
        </div>
      </div>
      <div className="min-h-svh  max-w-[calc(100%-10%)] mx-auto pt-20 text-center lg:px-10 lg:text-9xl md:text-6xl  text-4xl  text-white ">
        <h1 className=" font-economica  ">WARM NATURAL TASTE </h1>
        <h1 className="font-economica">WITH REFRESHING TWIST </h1>
        <h1 className="font-economica relative z-30">IN A CAN </h1>
      </div>
      <div className="fixed left-1/2 -translate-x-1/2 lg:flex justify-between items-center bottom-[32px] hidden flex-nowrap w-full px-20 font-mono tracking-tighter text-white text-[15px] z-50">
        <div className="uppercase flex flex-col justify-center items-start  ">
          <div>
            <GiBurningTree size={30} />
          </div>
          <span>Wramy GINGER</span>
          <span>With freshness lime</span>
        </div>
        <div className="uppercase flex flex-col justify-center items-end">
          <div className="">
            <GiBurningTree size={30} />
          </div>
          <span>Wramy GINGER</span>
          <span>With freshness lime</span>
        </div>
      </div>
    </div>
  );
}
