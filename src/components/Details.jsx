import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card , Spinner } from "flowbite-react";
import { useNavigate, useParams } from "react-router";
import { api, api_key } from "../api/index";
import { removeSelectedMovie, selectedMovie } from "../redux/action/movies";

const Details = () => {
  const { movieId } = useParams();

  const dispatch = useDispatch();

  const movieDetail = async () => {
    const res = await api.get(`/movie/${movieId}?api_key=${api_key}`);
    dispatch(selectedMovie(res.data));
  };

  useEffect(() => {
    if(movieId){
      movieDetail();
    } 
    return ()=>dispatch(removeSelectedMovie({}))
  }, []);

  let movie = useSelector((state) => state.movies.movie);

  const navigate = useNavigate();

  return (
    <div className="container mx-auto">
      <div
        className="flex flex-wrap gap-2"
        style={{
          margin: "10px  10px",
        }}
      >
        <Button
          onClick={() => {
            navigate("/");
          }}
          color="dark"
          outline
        >
          <i className="fa-solid fa-arrow-left me-3"></i>Back
        </Button>
      </div>
      <div>
        {
          JSON.stringify(movie) == {} ? 
          <div className='text-center'>
            <Spinner color="info" aria-label="Info spinner example" />
          </div>
          :
          <Card className="max-w-4xl mx-auto p-4">
          
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt="Movie Poster"
            className="w-full md:w-1/2 mx-auto rounded-lg mb-4 object-cover"
          />

          
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2 text-center">
            {movie.title}
          </h5>

          
          <p className="font-normal text-gray-700 dark:text-gray-400 mb-4 text-justify">
            {movie.overview}
          </p>

          
          <div className="flex flex-wrap justify-start gap-3 text-sm dark:text-white">
            
            <span className="flex items-center bg-black text-white px-3 py-1 rounded-lg">
              <i
                className="fa-solid fa-star me-2"
                style={{ color: "#FFD43B" }}
              ></i>
              {movie.vote_average}
            </span>

            
            <span className="flex items-center">
              <i className="fa-solid fa-calendar-days me-2"></i>
              {movie.release_date}
            </span>

           
            <span className="flex items-center">
              <i className="fa-solid fa-user me-2"></i>
              {movie.vote_count}
            </span>

            
            {movie.production_countries &&
              movie.production_countries.length > 0 && (
                <span className="flex items-center">
                  <i className="fa-solid fa-earth-americas me-2"></i>
                  {movie.production_countries[0].name}
                </span>
              )}
          </div>
        </Card>
        }
      </div>
    </div>
  );
};

export default Details;
