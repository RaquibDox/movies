import axios from "axios";

const movieApi = axios.create({
    baseURL: "https://www.omdbapi.com/",
});

export default movieApi;