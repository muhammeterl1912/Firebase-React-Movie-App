import { useState } from "react";
import { useMovieData } from "../context/MovieProvider";

const   {fetchData}=useMovieData()
const API_KEY = process.env.REACT_APP_TMDB_KEY;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;
const SearchInput = () => {
  const [change, setChange] = useState("");



const handleSubmit =(e)=>{
e.preventDefault()
fetchData(SEARCH_API + change )
}


  return (
    <div>
      <form className="flex justify-center p-2" onSubmit={handleSubmit}>
        <input
          type="search"
          className="w-80 h-8 rounded-md p-1 m-2"
          placeholder="Search for a Movie..."
          onChange={(e) => setChange(e.target.value)}
        />
        <button className="btn-danger-bordered uppercase">Search</button>
      </form>
    </div>
  );
};

export default SearchInput;
