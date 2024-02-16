import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselGallery(props) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className=" bg-orange-400 w-full mb-10   ">
      <p className=" text-center  text-4xl pt-10 font-bold text-white  ">
        {props.title}
      </p>
      <div className=" w-full  flex flex-row justify-center items-center h-screen  ">
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-4xl"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {/* { */}
            {/* [
            { image: "/Group 1.png", alt: "Image 1" },
            { image: "/Group 1.png", alt: "Image 2" },
            { image: "/Group 1.png", alt: "Image 3" },
            { image: "/Group 1.png", alt: "Image 4" },
            { image: "/Group 1.png", alt: "Image 5" },
          ] */}
            {props.images &&
              props.images.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="  md:m-40 p-10 md:w-[500px] md:h-[500px] flex justify-center items-center ">
                    <Image
                      src={item.urls.small}
                      alt={item.alt}
                      width={500}
                      height={500}
                    />
                  </div>
                </CarouselItem>
              ))}
          </CarouselContent>

          <div className="hidden md:block">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

