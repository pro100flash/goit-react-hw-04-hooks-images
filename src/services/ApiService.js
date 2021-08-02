import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api";
const API_KEY = "21713513-de4fa038d3971b80a05884d99";

const fetchImages = ({ searchQuery = "", currentPage = 1, pageSize = 15 }) => {
  return axios
    .get(
      `/?key=${API_KEY}&q=${searchQuery}
    &page=${currentPage}&image_type=photo&orientation=horizontal&per_page=${pageSize}`
    )
    .then(({ data }) => data.hits);
};

const api = {
  fetchImages,
};

export default api;
