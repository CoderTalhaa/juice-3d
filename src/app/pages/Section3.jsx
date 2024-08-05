import Image from "next/image";
import React from "react";

export default function Section3() {
  return (
    <div className="relative">
      <div className="bg-darkOrange absolute -z-50 h-full w-full "></div>

      <div className="relative z-10 flex flex-col text-center  mt-20 backdrop-blur-sm  bg-[#eb5c354d] ">
        <div className="mt-10">
          <p className="text-5xl font-economica">ABOUT TALHA</p>
        </div>

        <div className="mt-10 lg:text-7xl text-3xl font-obra">
          <p>Harmonizing the richness</p>
          <p className="flex justify-center items-center">
            of tradition{" "}
            <span className="px-2">
              <Image src="/blackeye.svg" alt="Logo" width={100} height={100} />
            </span>{" "}
            with
          </p>
          <p>the spirit of today.</p>
        </div>

        <div className="relative mt-10 flex flex-col justify-center items-center gap-1 ">
          <div className="border-t-2 h-2 w-full border-dashed border-black"></div>

          <div className="flex px-14 gap-5  bg-[#1A1A1A] text-light p-4 ">
            <div className="flex-col flex items-start text-start gap-1 ">
              <Image src="/star.svg" alt="Logo" width={40} height={40} />
              <p className="font-sans text-xl">
                EERBS is an innovative brand that seamlessly blends tradition
                with a contemporary spirit. Believing in the power of nature and
                local wisdom, our products not only offer unique and delicious
                flavors but also contribute to well-being.
              </p>
            </div>

            <div className="flex-col flex text-start gap-1">
              <Image src="/star.svg" alt="Logo" width={40} height={40} />
              <p className="font-sans text-xl">
                EERBS is an innovative brand that seamlessly blends tradition
                with a contemporary spirit. Believing in the power of nature and
                local wisdom, our products not only offer unique and delicious
                flavors but also contribute to well-being.?
              </p>
            </div>
          </div>

          <div className="border-t-2 h-2 w-full border-dashed border-black mb-20"></div>
        </div>
      </div>
    </div>
  );
}
