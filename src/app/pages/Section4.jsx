import Image from "next/image";
import React from "react";

export default function Section4() {
  return (
    <div>
      <div className="relative z-20 bg-[#1A1A1A] py-20  flex flex-col items-center lg:items-stretch  lg:flex-row lg:justify-evenly  text-light ">
        <div className="flex flex-col text-start ">
          <p className="text-7xl font-obra">BECOME PART</p>
          <p className="flex  items-center text-8xl font-obra">
            <Image src="/whiteeye.svg" alt="Logo" width={160} height={100} />
            of US!
          </p>
        </div>

        <div className="flex flex-col  max-w-[400px] gap-5 ">
          <p>
            Exclusive access to a front-row seat is reserved for the true
            pioneers who subscribe to our newsletter. At EERBS, we highly value
            those who embark on this adventure with us right from the start.
          </p>

          <div className="flex flex-col gap-3 items-start">
            <div className="relative z-20">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-b-2 border-zinc-500 focus:outline-none focus:border-zinc-400 placeholder-gray-500 pb-2"
              />
            </div>

            <button className="  px-6 py-3 font-Acme border-none rounded-[23px] cursor-pointer text-white bg-darkOrange  hover:bg-black hover:text-darkOrange transition-all duration-300 ease-in-out relative z-[2]">
              ORDER NOW
            </button>
          </div>
        </div>
      </div>

      {/* IMaGE */}

      <div className="relative w-full min-h-[50vh] z-20">
        <div className="absolute inset-0">
          <Image
            src="/groove.jpg"
            alt="Logo"
            layout="fill" // Makes the image cover the parent container
            objectFit="cover" // Ensures the image covers the container without stretching
          />
        </div>
      </div>

      
    </div>
  );
}
