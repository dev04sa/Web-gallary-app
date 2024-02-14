import React from "react";
import ButtonCard from "./ButtonCard";
import Link from "next/link";

const Hero = () => {
  return (
    <div className=" py-10 flex flex-row justify-evenly items-center ">
      <Link href="/collage">
        <ButtonCard
          imageUrl="/images/collage-removebg-preview.png"
          title="bg"
          name="collage"
        />
      </Link>
      <ButtonCard
        imageUrl="/images/Scrolling.png"
        title="bg"
        name="staged scrolling"
      />
      <Link href="carousel">
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
