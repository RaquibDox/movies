import React from 'react';
import { getAllMovies } from '../../features/movies/movieSlice';
import { useSelector } from 'react-redux';
import MovieCard from '../MovieCard/MovieCard';
import "./MovieListing.scss";

const MovieListing = () => {
    // const movies = useSelector((state) => state.movies.movies);
    const movies = useSelector(getAllMovies);
    // console.log(movies);

    let renderMovies = "";

   renderMovies = movies.Response === "True" ?(
        movies.Search.map((movie, index) =>{
            return <MovieCard key={index} data={movie} />
        })
   ):(
        <div className="movies-error">
            <h2>{movies.error}</h2>
        </div>
   );

   console.log(renderMovies);


    return (
        <div className='movie-wrapper'>
            <div className="movie-list">
                <h2>Movies1</h2>
                <div className="movie-container">
                    {renderMovies}
                </div>
            </div>
        </div>
    );
};

export default MovieListing;