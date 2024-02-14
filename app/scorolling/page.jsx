"use client";

import React, { useCallback, useEffect, useState } from "react";
import axios from "axios"; // Don't forget to import axios
import requests from "@/components/Request";
import StagedScrollingGalleryPage from "@/components/StagedScrollingGalleryPage";

const Page = () => {
  const [images1, setImages1] = useState([]);
  const [images2, setImages2] = useState([]);
  const [images3, setImages3] = useState([]);
  const [images4, setImages4] = useState([]);

  const fetchImages = useCallback(async () => {
    try {
      // const { data } = await requests.shoes;
      const res1 = await axios.get(requests.shoes);
      const res2 = await axios.get(requests.nature);
      const res3 = await axios.get(requests.Flower);
      const res4 = await axios.get(requests.Sports);
      // const { data } = await axios.get(
      //   `${API_URL}?query=shoes&per_page=${IMAGES_PER_PAGE}&client_id=${process.env.NEXT_PUBLIC_YOUR_API_KEY}`
      // );

      setImages1(res1.data.results);
      setImages2(res2.data.results);
      setImages3(res3.data.results);
      setImages4(res4.data.results);
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
      <StagedScrollingGalleryPage images={images1} />
      <StagedScrollingGalleryPage images={images2} />
      <StagedScrollingGalleryPage images={images3} />
      <StagedScrollingGalleryPage images={images4} />
    </div>
  );
};

export default Page;
