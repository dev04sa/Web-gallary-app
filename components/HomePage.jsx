"use client";

import axios from "axios";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { CarouselGallery } from "./CarouselGallery";

const API_URL = "https://api.unsplash.com/search/photos";
const IMAGES_PER_PAGE = 30;

export const HomePage = () => {
  const searchInput = useRef(null);
  // Create a mutable ref for images

  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchImages = useCallback(async () => {
    try {
      if (searchInput.current.value) {
        setErrorMsg("");
        setLoading(true);
        const { data } = await axios.get(
          `${API_URL}?query=${searchInput.current.value}&page=${page}&per_page=${IMAGES_PER_PAGE}&client_id=${process.env.NEXT_PUBLIC_YOUR_API_KEY}`
        );
        // console.log(data.results);

        setImages(data.results);
        setTotalPages(data.total_pages);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg("Error fetching images. Try again later.");
      console.log(error);
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const resetSearch = () => {
    setPage(1);
    fetchImages();
  };

  const handleSearch = (event) => {
    event.preventDefault();
    resetSearch();
  };

  const handleSelection = (selection) => {
    searchInput.current.value = selection;
    resetSearch();
  };

  const buttons = [
    {
      id: 1,
      name: "Nature",
      color: "bg-red-500",
      hoverColor: "hover:bg-red-600",
    },
    {
      id: 2,
      name: "Film",
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600",
    },
    {
      id: 3,
      name: "Animals",
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
    },
    {
      id: 4,
      name: "People",
      color: "bg-yellow-500",
      hoverColor: "hover:bg-yellow-600",
    },
    {
      id: 5,
      name: "Food",
      color: "bg-indigo-500",
      hoverColor: "hover:bg-indigo-600",
    },
    {
      id: 6,
      name: "Sports",
      color: "bg-purple-500",
      hoverColor: "hover:bg-purple-600",
    },
    {
      id: 7,
      name: "Wallpapers",
      color: "bg-pink-500",
      hoverColor: "hover:bg-pink-600",
    },
    {
      id: 8,
      name: "Valentine",
      color: "bg-gray-500",
      hoverColor: "hover:bg-gray-600",
    },
    {
      id: 9,
      name: "Flower",
      color: "bg-teal-500",
      hoverColor: "hover:bg-teal-600",
    },
    {
      id: 10,
      name: "Book",
      color: "bg-orange-500",
      hoverColor: "hover:bg-orange-600",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Image Search</h1>
      {errorMsg && <p className="text-red-500">{errorMsg}</p>}
      <div className="search-section mb-4">
        <form onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Type something to search..."
            className="border rounded px-4 py-2 w-full"
            ref={searchInput}
          />
        </form>
      </div>
      <div className="filters w-full   mb-4 grid grid-cols-2 px-4 md:flex md:flex-row justify-evenly items-center">
        {buttons.map((bt) => {
          return (
            <div
              key={bt.id}
              className={`cursor-pointer mr-4 mb-2 p-2 text-center rounded border border-gray-300 ${bt.color} ${bt.hoverColor}`}
              onClick={() => handleSelection(bt.name)}
            >
              {bt.name}
            </div>
          );
        })}
      </div>
      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <>
          <div className=" w-full grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((image) => (
              <div key={image.id} className="rounded overflow-hidden">
                <Image
                  src={image.urls.small}
                  alt={image.alt_description}
                  className="w-full h-auto"
                  width={400}
                  height={400}
                  layout="responsive"
                />
              </div>
            ))}
          </div>
          {/* <div className="grid grid-cols-3 gap-4">
            {images.map((image) => (
              <div key={image.id} className="rounded overflow-hidden">
                <Image
                  src={image.urls.small}
                  alt={image.alt_description}
                  className="w-full h-auto"
                  width={400}
                  height={400}
                  layout="responsive"
                />
              </div>
            ))}
          </div> */}
          <div className="buttons mt-4">
            {page > 1 && (
              <button
                className="mr-2 bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => setPage(page - 1)}
              >
                Previous
              </button>
            )}
            {page < totalPages && (
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => setPage(page + 1)}
              >
                Next
              </button>
            )}
          </div>
        </>
      )}
      <div>{/* <CarouselGallery images={images} /> */}</div>
    </div>
  );
};
