import notFound from "../assets/icons/notFound.png";
import { useNavigate } from "react-router-dom";
import { useMovieData } from "../context/MovieProvider";

const NotFound = () => {
  const { refresh } = useMovieData();
  const navigate = useNavigate();
  return (
    <div>
      <img
        src={notFound}
        alt="Not Found"
        className="mx-auto p-10 mt-14 rounded-xl"
      />
      <div className="flex justify-evenly w-1/2 mx-auto space-evenly p-10 mb-10">
        <button
          className="bg-red-700 p-3 w-1/4 rounded-lg hover:opacity-[0.93] hover:scale-95 transition-all"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
        <button
          className="bg-red-700 p-3 w-1/4 rounded-lg hover:opacity-[0.93] hover:scale-95 transition-all"
          onClick={refresh}
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
