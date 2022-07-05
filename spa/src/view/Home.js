import { useState } from "react";
import { MovieService } from "../service/MoviesService";
import { useEffect } from "react";
import { MoviesContainer } from "../style/MoviesContainer";
import { MoviesList } from "../component/MoviesList"

export const Home = () => {

  const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
    const { data } = await MovieService.getMovies();
    console.log(data);
    setMovies(data.results);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <MoviesContainer>
      <MoviesList movies={movies} />
    </MoviesContainer>
  );
}