import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { MovieService } from "../service/MoviesService";

export const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const fetchMovie = async () => {
        const { data } = await MovieService.getMovieById(id);
        console.log(data);
        setMovie(data);
    }

    useEffect(() => {
        fetchMovie();
    });

    return (
        <section>
            <h1>{movie.title}</h1>
            <article>{movie.overview}</article>
        </section>
    );
}