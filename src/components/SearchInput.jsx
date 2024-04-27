import { useState } from "react";
import { useMovieData } from "../context/MovieProvider";
import { toastWarnNotify } from "../helper/ToastNotify";
import { useContextAuth } from "../context/AuthProvider";


const API_KEY = process.env.REACT_APP_TMDB_KEY;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;


const SearchInput = () => {


  const [change, setChange] = useState("");
  const { fetchData } = useMovieData();
const {currentUser} =useContextAuth()
  const handleSubmit = (e) => {
    e.preventDefault();
    if (change &&currentUser) {
      fetchData(SEARCH_API + change);
    }else if(!currentUser){
        toastWarnNotify("Please Log-in to search for a movie..."); 
        setChange("")
    } 
    else {
      toastWarnNotify("Please Enter a text to see the Movie");
    }
  };

  return (
    <div>
      <form className="flex justify-center p-2" onSubmit={handleSubmit}>
        <input
          type="search"
          className="w-80 h-8 rounded-md p-1 m-2"
          placeholder="Search for a Movie..."
          value={change}
          onChange={(e) => setChange(e.target.value)}
          
        />
        <button className="btn-danger-bordered uppercase">Search</button>
      </form>
    </div>
  );
};

export default SearchInput;
