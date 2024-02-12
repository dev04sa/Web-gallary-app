import React from "react";
import ButtonCard from "./ButtonCard";

const Hero = () => {
  return (
    <div className=" py-10 flex flex-row justify-evenly items-center ">
      <ButtonCard imageUrl="/images/collage-removebg-preview.png" title="bg" name='collage' />
      <ButtonCard imageUrl="/images/Scrolling.png" title="bg" name='staged scrolling' />
      <ButtonCard
        imageUrl="/images/carousel_addon-removebg-preview.png"
        title="bg"
        name='carousel'
      />
    </div>
  );
};

export default Hero;

