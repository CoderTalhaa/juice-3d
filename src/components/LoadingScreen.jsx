import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function LoadingScreen({ progress }) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const initialPath = `M0 0 L${dimensions.width} 0 L${dimensions.width} ${
    dimensions.height
  } Q${dimensions.width / 2} ${dimensions.height + 300} 0 ${
    dimensions.height
  } L0 0`;

  const targetPath = `M0 0 L${dimensions.width} 0 L${dimensions.width} ${
    dimensions.height
  } Q${dimensions.width / 2} ${dimensions.height} 0 ${dimensions.height} L0 0`;

  const curveAnim = {
    initial: { d: initialPath },
    exit: {
      d: targetPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
    },
  };

  const slideUp = {
    initial: { y: "0" },
    exit: {
      y: "-100vh",
      transition: { ease: [0.76, 0, 0.24, 1], duration: 0.8, delay: 0.2 },
    },
  };
  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="fixed top-0 left-0 w-full min-h-svh bg-darkOrange z-[999] flex justify-center items-center flex-col gap-6"
    >
      {dimensions.height > 0 && (
        <>
          <Image
            src="/title.svg"
            alt="Logo"
            width={400}
            height={100}
            className="relative z-30"
          />

          <div className="relative w-96 bg-white rounded-3xl z-30">
            <div
              className="h-2  origin-left transition-all duration-1000 ease-in-out bg-orange rounded-3xl"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <svg className="absolute top-0 left-0 w-full h-[120%] ">
            <motion.path
              variants={curveAnim}
              initial="initial"
              exit="exit"
              d={initialPath}
              className="fill-[#EB5C35]"
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
}
