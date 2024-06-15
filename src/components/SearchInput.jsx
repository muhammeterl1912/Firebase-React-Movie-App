import { useRef, memo } from "react";
import { useMovieData } from "../context/MovieProvider";
import { toastWarnNotify } from "../helper/ToastNotify";
import { useContextAuth } from "../context/AuthProvider";

const API_KEY = process.env.REACT_APP_TMDB_KEY;

if (!API_KEY) {
  console.error(
    "API key is missing! Please set REACT_APP_TMDB_KEY in your environment variables."
  );
}
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;
const SearchInput = () => {
  const { fetchData } = useMovieData();
  const { currentUser } = useContextAuth();
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = inputRef.current.value.trim();

    if (!currentUser) {
      toastWarnNotify("Please log in to search for a movie...");
      return;
    }
    if (searchValue) {
      fetchData(SEARCH_API + searchValue);
      inputRef.current.value = "";
      inputRef.current.focus();
    } else {
      toastWarnNotify("Please enter a text to search for a movie.");
    }
  };

  return (
    <div>
      <form className="flex justify-center p-2" onSubmit={handleSubmit}>
        <input
          type="search"
          className="w-80 h-8 rounded-md p-1 m-2"
          placeholder="Search for a movie..."
          ref={inputRef}
        />
        <button className="btn-danger-bordered uppercase">Search</button>
      </form>
    </div>
  );
};

export default memo(SearchInput);
