import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ movies, setCardDesc }) => {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <Link to="desc" key={index} onClick={() => setCardDesc(movie)}>
          <MovieCard movie={movie} />
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
