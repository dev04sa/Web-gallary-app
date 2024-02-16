import React from "react";
import ButtonCard from "./ButtonCard";
import Link from "next/link";

const Hero = () => {
  return (
    <div className=" py-10  flex flex-col  md:flex-row justify-evenly items-center ">
      <Link href="/collage">
        <ButtonCard
          imageUrl="/images/collage-removebg-preview.png"
          title="bg"
          name="collage"
        />
      </Link>
      <Link href="/scorolling">
        <ButtonCard
          imageUrl="/images/Scrolling.png"
          title="bg"
          name="staged scrolling"
        />
      </Link>
      <Link href="/carousel">
        <ButtonCard
          imageUrl="/images/carousel_addon-removebg-preview.png"
          title="bg"
          name="carousel"
        />
      </Link>
    </div>
  );
};

export default Hero;
