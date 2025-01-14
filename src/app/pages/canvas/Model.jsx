/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import useProductStore from "@/store/productStore";
import { motion } from "framer-motion-3d";

gsap.registerPlugin();

export function Model({ progress, ...props }) {
  const { nodes, materials } = useGLTF("/models/juice.glb");

  const { modelAnimation, activeData } = useProductStore();

  const cap = useRef(null);
  const glass = useRef(null);
  const milk = useRef(null);
  const logo = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    if (modelAnimation) {
      tl.fromTo(
        glass.current.position,
        { y: -10 },
        { y: 0, duration: 2, ease: "power3.inOut" }
      )
        .fromTo(
          milk.current.position,
          { z: 100 },
          { z: 0, duration: 0.8, ease: "power3.inOut" }
        )
        .fromTo(
          cap.current.position,
          { x: 10 },
          { x: 0, duration: 2, ease: "power3.inOut" }
        )
        .fromTo(
          logo.current.position,
          { y: -10 },
          { y: 0, duration: 1, ease: "power3.inOut" }
        );
    }

    return () => {
      if (tl.current) {
        tl.current.kill();
      }
    };
  }, [modelAnimation]);

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={cap}
        castShadow
        receiveShadow
        geometry={nodes.cap.geometry}
        material={materials.Steel}
      />
      <mesh
        ref={milk}
        castShadow
        receiveShadow
        geometry={nodes.liquid.geometry}
        // material={materials.Blood_Glass}
      >
        <motion.meshStandardMaterial
          animate={{ color: activeData.colors.background }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </mesh>
      <mesh
        ref={glass}
        castShadow
        receiveShadow
        geometry={nodes.glass.geometry}
        material={materials.Smuged_Glass}
      />
      <mesh
        ref={logo}
        castShadow
        receiveShadow
        geometry={nodes.logo.geometry}
        material={materials.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/juice.glb");
