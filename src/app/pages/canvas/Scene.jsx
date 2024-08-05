import { Canvas } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { Model } from "./Model";
import { Environment, Float, OrbitControls } from "@react-three/drei";
import {
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { motion } from "framer-motion-3d";
import { useControls } from "leva";

export default function Scene() {
  const containerRef = useRef(null);

  const options = {
    damping: 20,
  };
  const mouse = {
    x: useSpring(useMotionValue(0), options),
    y: useSpring(useMotionValue(0), options),
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    const x = -0.5 + clientX / innerWidth;
    const y = -0.5 + clientY / innerHeight;

    mouse.x.set(x);
    mouse.y.set(y);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.4], [0, 6, 6, 6]);
  const y = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3, 0.4],
    [3.11, 6, 3.11, 3.11]
  );
  const z = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3, 0.5, 0.8, 1],
    [0, 1, 4, 0, 6, 7]
  );

  // const { rotationX, rotationY, rotationZ } = useControls({
  //   rotationX: { value: 0, min: -Math.PI, max: Math.PI * 2, step: 0.01 },
  //   rotationY: { value: 0, min: -Math.PI, max: Math.PI * 2, step: 0.01 },
  //   rotationZ: { value: 0, min: -Math.PI, max: Math.PI * 2, step: 0.01 },
  // });

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-[500vh]  pointer-events-none z-[1] "
    >
      <div className="sticky top-0 left-0 h-svh">
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight inensity={2} />
          <Float
            speed={2}
            rotationIntensity={0.3}
            floatIntensity={1}
            floatingRange={[0.9, 1]}
          >
            <motion.group rotation-x={mouse.y} rotation-y={mouse.x}>
              <motion.group rotation-x={x} rotation-y={y}>
                <Model
                  scale={[3, 3, 3]}
                  position={[0, -3.6, 0]}
                  // rotation={[rotationX, rotationY, rotationZ]}
                  progress={scrollYProgress}
                />
              </motion.group>
            </motion.group>
          </Float>
          <Environment preset="city" />
        </Canvas>
      </div>
    </div>
  );
}
