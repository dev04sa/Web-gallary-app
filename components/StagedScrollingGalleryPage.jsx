import React from "react";
import Image from "next/image";

const StagedScrollingGalleryPage = ({ images }) => {
  return (
    <div className="flex overflow-x-auto space-x-4">
      {images.map((item) => (
        <div key={item.id} className="relative h-64 w-64 flex-shrink-0">
          <Image
            src={item.urls.small}
            alt="Image 1"
            layout="fill"
            objectFit="cover"
          />
        </div>
      ))}
      {/* <div className="relative h-64 w-64 flex-shrink-0">
        <Image
          src="/Group 1.png"
          alt="Image 2"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative h-64 w-64 flex-shrink-0">
        <Image
          src="/Group 1.png"
          alt="Image 3"
          layout="fill"
          objectFit="cover"
        />
      </div> */}
      {/* Add more images as needed */}
    </div>
  );
};

export default StagedScrollingGalleryPage;
