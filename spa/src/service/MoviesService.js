import axios from "axios";

// put api key
const API_KEY = '';
const BASE_URL = 'https://api.themoviedb.org/3/';
const withBaseUrl = path => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MovieService {
    static getMovies() {
        return axios(withBaseUrl('movie/popular'))
    }

    static getMovieById(id) {
        return axios(withBaseUrl(`movie/${id}`))
    }
}