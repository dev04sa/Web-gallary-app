import React from "react";
import Image from "next/image";

const StagedScrollingGalleryPage = ({ images, title }) => {
  return (
    <div>
      <p className=" text-2xl font-bold text-center pt-5 "> {title} </p>
      <div className="flex overflow-x-auto space-x-4 p-5 ">
        {images &&
          images.map((item) => (
            <div key={item.id} className="relative h-64 w-64 flex-shrink-0">
              <Image
                src={item.urls.small}
                alt="Image 1"
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default StagedScrollingGalleryPage;
