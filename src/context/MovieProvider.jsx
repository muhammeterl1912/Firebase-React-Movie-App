import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
const movieProvider = createContext();

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async (URL) => {
try {
  setLoading(true);
  const rawData = await axios(URL);
  setMovies(rawData.data.results);
} catch (error) {

} finally{
  setLoading(false)
}
  };

  useEffect(() => {
    fetchData(FEATURED_API);
  }, []);
console.log(movies,loading)
const values ={movies,loading}
  return (
    <movieProvider.Provider value={values}>{children}</movieProvider.Provider>
  );
};

export const useMovieData = () => {
  useContext(movieProvider);
};
export default MovieProvider;
