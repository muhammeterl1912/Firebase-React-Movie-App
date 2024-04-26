import { useMovieData } from "../context/MovieProvider";
import LoadingText from "../components/Loading";
import MovieCard from "../components/MovieCard";

const Main = () => {
  const { movies, loading } = useMovieData();

  return (
    <div>
      <div className="flex justify-center flex-wrap">
        {loading ? (
          <LoadingText />
        ) : (
          movies?.map((movie) => {
            return <MovieCard key={movie.id} {...movie} />;
          })
        )}
      </div>
    </div>
  );
};

export default Main;
