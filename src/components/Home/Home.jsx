import React, { useEffect } from 'react';
import MovieListing from '../MovieListing/MovieListing';
import movieApi from "../../common/apis/MovieApi";
import { APIkey } from "../../common/apis/MovieApiKey";

const Home = () => {

    useEffect(() =>{
        const movieText = "Harry";
        const fetchMovies = async () => {
            const response = await movieApi.get(`?apiKey=${APIkey}&s=${movieText}&type=movie`)
            .catch((err) => {
                console.log("Error : " + err);
            });
            console.log( "the response from api", response.data);
        };

        fetchMovies();
    },[]);

    return (
        <div>
            <div className="banner-img"></div>
            <MovieListing />
        </div>
    );
};

export default Home;