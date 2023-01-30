import axios from "axios";

axios.defaults.baseURL = `https://pixabay.com/api/`;

const KEY = `30745255-b909a2241bf9ab8444da42817`;

export const fetchImages = async (query, page) => {
    const response = await axios.get(
      `/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
  return response.data;
}