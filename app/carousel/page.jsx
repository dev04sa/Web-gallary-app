// /* eslint-disable react-hooks/rules-of-hooks */
// "use client";
// import { CarouselGallery } from "@/components/CarouselGallery";
// import React, { useCallback, useEffect, useState } from "react";
// const API_URL = "https://api.unsplash.com/search/photos";
// const IMAGES_PER_PAGE = 30;
// const page = async () => {
//   const [images, setImages] = useState([]);
//   const fetchImages = useCallback(async () => {
//     try {
//       const { data } = await axios.get(
//         `${API_URL}?query=${`book`}&page=${1}&per_page=${IMAGES_PER_PAGE}&client_id=${
//           process.env.NEXT_PUBLIC_YOUR_API_KEY
//         }`
//       );
//       // console.log(data.results);

//       setImages(data.results);
//     } catch (error) {
//       console.log(error);
//     }
//   }, []);

//   useEffect(() => {
//     fetchImages();
//   }, [fetchImages]);
//   // console.log(images);
//   return (
//     <div>
//       <CarouselGallery images={images} />
//     </div>
//   );
// };

// export default page;
// ./app/carousel/page.jsx

"use client";

import React, { useCallback, useEffect, useState } from "react";
import axios from "axios"; // Don't forget to import axios
import { CarouselGallery } from "@/components/CarouselGallery";
import requests from "@/components/Request";
const API_URL = "https://api.unsplash.com/search/photos";
const IMAGES_PER_PAGE = 30;

const Page = () => {
  const [images1, setImages1] = useState([]);
  const [images2, setImages2] = useState([]);

  const fetchImages = useCallback(async () => {
    try {
      // const { data } = await requests.shoes;
      const res1 = await axios.get(requests.shoes);
      const res2 = await axios.get(requests.nature);
      // const { data } = await axios.get(
      //   `${API_URL}?query=shoes&per_page=${IMAGES_PER_PAGE}&client_id=${process.env.NEXT_PUBLIC_YOUR_API_KEY}`
      // );

      setImages1(res1.data.results);
      setImages2(res2.data.results);
      // setImages2(data2.results);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  return (
    <div>
      <CarouselGallery images={images1} />
      <CarouselGallery images={images2} />
    </div>
  );
};

export default Page;

// import React, { useCallback, useEffect, useState } from "react";
// import axios from "axios";
// import { CarouselGallery } from "@/components/CarouselGallery";
// import requests from "@/components/Request";

// const API_URL = "https://api.unsplash.com/search/photos";
// const IMAGES_PER_PAGE = 30;

// const Page = () => {
//   const [images1, setImages1] = useState([]);

//   const fetchImages = useCallback(async () => {
//     try {
//       const apiKey = process.env.NEXT_PUBLIC_YOUR_API_KEY;
//       console.log("API key:", apiKey); // Check if API key is accessible

//       const response = await axios.get(
//         `${API_URL}?query=shoes&per_page=${IMAGES_PER_PAGE}&client_id=${apiKey}`
//       );
//       console.log("Response from Unsplash:", response.data); // Log the response from Unsplash API

//       setImages1(response.data.results);
//     } catch (error) {
//       console.error("Error fetching images:", error); // Log any errors that occur during the request
//     }
//   }, []);

//   useEffect(() => {
//     fetchImages();
//   }, [fetchImages]);

//   return (
//     <div>
//       <CarouselGallery images={images1} />
//     </div>
//   );
// };

// export default Page;
