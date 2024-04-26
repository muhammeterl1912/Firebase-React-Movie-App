import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
const movieContext= createContext();

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

const values ={movies,loading,fetchData}
  return (
    <movieContext.Provider value={values}>{children}</movieContext.Provider>
  );
};
  
export const useMovieData = () => {
 return  useContext(movieContext);
};

export default MovieProvider;
