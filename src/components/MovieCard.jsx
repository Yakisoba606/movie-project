import React from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <div className="max-w-sm h-full">
        <Link to={`/movies/details/${movie.id}`}>
          <Card
            imgAlt="Movie Poster"
            imgSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            className = 'h-full flex flex-col justify-start'
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {movie.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {movie.overview.slice(0, 150)}
            </p>
            <div className="flex items-center space-x-4 dark:text-white">
              <span className="flex items-center bg-black p-3 rounded-xl">
                <i className="fa-solid fa-star me-1" style={{ color: '#FFD43B' }}></i>
                {movie.vote_average}
              </span>
              <span className="flex items-center">
                <i className="fa-solid fa-calendar-days me-1"></i>
                {movie.release_date}
              </span>
            </div>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
