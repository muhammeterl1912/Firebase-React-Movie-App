import { useMovieData } from "../context/MovieProvider";
import LoadingText from "../components/Loading";
import MovieCard from "../components/MovieCard";
import SearchInput from "../components/SearchInput"
import NotFound from "./NotFound";
const Main = () => {
  const { movies, loading } = useMovieData();

  return (
    <div>
    <SearchInput/>
      <div className="flex justify-center flex-wrap">
        {loading ? (
          <LoadingText />
        ) : (
          movies?.map((movie) => {
            return <MovieCard key={movie.id} {...movie} />;
          })
        )}
      </div>
      {!loading && !movies.length&& (<NotFound/>)}
    </div>
  );
};

export default Main;
