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
    <div className=" bg-yellow-500  ">
      <p className=" text-center text-4xl pt-10 font-bold  ">Coursel</p>

      <div className="  flex justify-center items-center h-screen  ">
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
                  <div className="m-40 p-16 w-[500px] h-[500px] flex justify-center items-center ">
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

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

// "use client";
// import * as React from "react";
// import Autoplay from "embla-carousel-autoplay";
// import Image from "next/image";

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// export function CarouselGallery(props) {
//   const plugin = React.useRef(
//     Autoplay({ delay: 2000, stopOnInteraction: true })
//   );

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="flex justify-center items-center w-full">
//         <Carousel
//           plugins={[plugin.current]}
//           className="max-w-4xl"
//           onMouseEnter={plugin.current.stop}
//           onMouseLeave={plugin.current.reset}
//         >
//           <CarouselContent>
//             {props.images.map((item, index) => (
//               <CarouselItem key={index}>
//                 <div className="p-1 flex justify-center items-center  ">
//                   <div className="w-full h-64 bg-cover ">
//                     {" "}
//                     {/* Set a fixed height for the image container */}
//                     <Image src={item.urls.small} alt={item.alt} layout="fill" />
//                   </div>
//                 </div>
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//           <CarouselPrevious />
//           <CarouselNext />
//         </Carousel>
//       </div>
//     </div>
//   );
// }
