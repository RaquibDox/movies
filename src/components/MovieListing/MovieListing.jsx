import React from 'react';
import Slider from 'react-slick';
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice';
import { useSelector } from 'react-redux';
import MovieCard from '../MovieCard/MovieCard';
import "./MovieListing.scss";
import { settings } from '../../common/settings';

const MovieListing = () => {
    // const movies = useSelector((state) => state.movies.movies);
    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);
    // console.log(movies);

    let renderMovies, renderShows = "";

   renderMovies = movies.Response === "True" ?(
        movies.Search
        .slice()
        .sort((a, b) => b.Year.localeCompare(a.Year))
        .map((movie, index) =>{
            return <MovieCard key={index} data={movie} />
        })
   ):(
        <div className="movies-error">
            <h2>{movies.error}</h2>
        </div>
   );

   renderShows = shows.Response === "True" ?(
        shows.Search
        .slice()
        .sort((a, b) => b.Year.localeCompare(a.Year)).map((show, index) =>{
            return <MovieCard key={index} data={show} />
        })
    ):(
        <div className="shows-error">
            <h2>{shows.error}</h2>
        </div>
    );

//    console.log(renderMovies);


    return (
        <div className='movie-wrapper'>
            <div className="movie-list">
                <h2>Movies :</h2>
                <div className="movie-container">
                    <Slider {...settings}>
                        {renderMovies}
                    </Slider>
                </div>
            </div>
            <div className="show-list">
                <h2>Shows :</h2>
                <div className="shows-container">
                    <Slider {...settings}>
                        {renderShows}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default MovieListing;

