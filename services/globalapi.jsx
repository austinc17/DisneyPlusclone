import axios from "axios";

const movieBaseurl = "https://api.themoviedb.org/3";
const api_key = "a8451f8ba6e07ed646ecc46dfa92dbfd";
const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=a8451f8ba6e07ed646ecc46dfa92dbfd'
const globalapi = {
    gettrendingvideo: () => axios.get(`${movieBaseurl}/trending/all/day?api_key=${api_key}`)
};
const getmoviebyId=(id)=>
    axios.get(movieByGenreBaseURL+ "&with_genres=" +id)

export default globalapi;

