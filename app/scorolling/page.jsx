

"use client";

import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import requests from "@/components/Request";
import StagedScrollingGalleryPage from "@/components/StagedScrollingGalleryPage";

const Page = () => {
  const [images, setImages] = useState({
    shoes: [],
    nature: [],
    flower: [],
    Film: [],
    Animals: [],
    Food: [],
    Wallpapers: [],
  });

  const fetchImages = useCallback(async () => {
    try {
      const res1 = await axios.get(requests.shoes);
      const res2 = await axios.get(requests.nature);
      const res3 = await axios.get(requests.Flower);
      const res4 = await axios.get(requests.Sports);
      const res5 = await axios.get(requests.Film);
      const res6 = await axios.get(requests.Animals);
      const res7 = await axios.get(requests.Food);
      const res8 = await axios.get(requests.Wallpapers);

      setImages({
        shoes: res1.data.results,
        nature: res2.data.results,
        flower: res3.data.results,
        sports: res4.data.results,
        Film: res5.data.results,
        Animals: res6.data.results,
        Food: res7.data.results,
        Wallpapers: res8.data.results,
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  return (
    <div>
      <StagedScrollingGalleryPage
        images={images.shoes}
        title={"Trending Shoes"}
      />
      <StagedScrollingGalleryPage images={images.nature} title={"Nature"} />
      <StagedScrollingGalleryPage images={images.flower} title={"Flowers"} />
      <StagedScrollingGalleryPage images={images.sports} title={"Sports"} />
      <StagedScrollingGalleryPage images={images.Film} title={"Film"} />
      <StagedScrollingGalleryPage images={images.Animals} title={"Animals"} />
      <StagedScrollingGalleryPage images={images.Food} title={"Food"} />
      <StagedScrollingGalleryPage
        images={images.Wallpapers}
        title={"Wallpapers"}
      />
    </div>
  );
};

export default Page;
