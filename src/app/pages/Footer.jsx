import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="relative ">
      <div className="bg-[#191919] absolute -z-50 h-full w-full "></div>
      <div className="relative z-10 flex flex-col  items-center  pt-10  backdrop-blur-sm  bg-[#19191980] ">
        <p className="lg:text-2xl text-xl font-economica text-light">
          EERBS signature spice beverage
        </p>

        <div className="pt-5">
          <Image src="/title.svg" alt="Logo" width={400} height={100} />
        </div>

        <pre className="text-light text-xl hidden lg:block font-economica mt-10 mb-14 tracking-wide">
          2024 PAKISAN - ALL Rights Reserved by YOUR BRO TALHA | Cookies |
          Privacy Policy | Return Policy | General Condition
        </pre>

        <p className="text-light text-xl lg:hidden block font-economica mt-10 mb-14 tracking-wide">
          2024 PAKISAN - ALL Rights Reserved by YOUR BRO TALHA
        </p>
      </div>
    </div>
  );
}
