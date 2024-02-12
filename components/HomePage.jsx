"use client";
import axios from "axios";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const API_URL = "https://api.unsplash.com/search/photos";
const IMAGES_PER_PAGE = 30;

export const HomePage = () => {
  const searchInput = useRef(null);
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
    },
    {
      id: 2,
      name: "Film",
    },
    {
      id: 3,
      name: "Animals",
    },
    {
      id: 4,
      name: "People",
    },
    {
      id: 5,
      name: "Food & Drink",
    },
    {
      id: 6,
      name: "Sports",
    },
    {
      id: 7,
      name: "Wallpapers",
    },
    {
      id: 8,
      name: "Valentine",
    },
    {
      id: 9,
      name: "Flower",
    },
    {
      id: 10,
      name: "Book",
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
      <div className="filters mb-4 flex flex-wrap">
        {buttons.map((bt) => {
          return (
            <div
              key={bt.id}
              className="cursor-pointer mr-4 mb-2 p-2 rounded border border-gray-300 hover:bg-gray-100"
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
          <div className="grid grid-cols-3 gap-4">
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
    </div>
  );
};
