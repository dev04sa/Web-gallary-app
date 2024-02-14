const { default: axios } = require("axios");

const API_URL = "https://api.unsplash.com/search/photos";
const IMAGES_PER_PAGE = 30;

const requests = {
  shoes: `${API_URL}?query=${`shoes`}&per_page=${IMAGES_PER_PAGE}&client_id=${
    process.env.NEXT_PUBLIC_YOUR_API_KEY
  }`,
  nature: `${API_URL}?query=${`nature`}&per_page=${IMAGES_PER_PAGE}&client_id=${
    process.env.NEXT_PUBLIC_YOUR_API_KEY
  }`,
  Flower: `${API_URL}?query=${`Flower`}&per_page=${IMAGES_PER_PAGE}&client_id=${
    process.env.NEXT_PUBLIC_YOUR_API_KEY
  }`,
  Sports: `${API_URL}?query=${`Sports`}&per_page=${IMAGES_PER_PAGE}&client_id=${
    process.env.NEXT_PUBLIC_YOUR_API_KEY
  }`,
};

export default requests;
