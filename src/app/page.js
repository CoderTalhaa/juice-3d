"use client";
import Lenis from "lenis";
import React, { useCallback, useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import { useProgress } from "@react-three/drei";
import LoadingScreen from "@/components/LoadingScreen";
import { AnimatePresence } from "framer-motion";
import useProductStore from "@/store/productStore";

export default function Home() {
  const { setmodelAnimation, modelAnimation } = useProductStore();

  const [isloading, setIsLoading] = useState(true);
  const { progress, active } = useProgress();

  useEffect(() => {
    const lenis = new Lenis({});

    lenis.stop();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    if (progress === 100) {
      handleLoading(lenis);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [progress]);

  const handleLoading = (lenis) => {
    setTimeout(() => {
      setIsLoading(false);
      lenis.start();
      window.scrollTo(0, 0);
      setmodelAnimation(!modelAnimation);
    }, 2000);
  };
  return (
    <>
      <AnimatePresence mode="wait">
        {isloading && <LoadingScreen progress={progress} />}
      </AnimatePresence>
      <HomePage />
    </>
  );
}
