import Image from "next/image";
import React from "react";

const ButtonCard = ({ imageUrl, title, name }) => {
  return (
    <div className="max-w-sm rounded  overflow-hidden shadow-lg cursor-pointer transition duration-500 ease-in-out transform hover:scale-105">
      <p className="text-white text-center text-4xl "> {name} </p>
      <Image
        className="w-full py-5 h-64 object-cover transition duration-500 ease-in-out transform hover:opacity-80"
        src={imageUrl}
        alt={title}
        width={400}
        height={400}
      />
    </div>
  );
};

export default ButtonCard;
