import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Scene from "./canvas/Scene";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <>
      <Scene />

      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </>
  );
}
