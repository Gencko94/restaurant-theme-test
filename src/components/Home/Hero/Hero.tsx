import isMobile from "@/utils/isMobile";
import dynamic from "next/dynamic";
import React from "react";

const ResponsiveHero = dynamic(
  () =>
    isMobile()
      ? import("@/components/Home/Hero/HeroMobile/HeroMobile")
      : import("@/components/Home/Hero/HeroDesktop/HeroDesktop"),
  { ssr: false },
);
const Hero = () => <ResponsiveHero />;

export default Hero;
