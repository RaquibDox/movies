import React, { useEffect } from 'react';
import MovieListing from '../MovieListing/MovieListing';
import { useDispatch, useSelector } from 'react-redux';
import { addHomeRender} from '../../features/movies/movieSlice';
import { getHomeRenderCount} from '../../features/movies/movieSlice';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

const Home = () => {
    const homeRenderCount = useSelector(getHomeRenderCount);
    // console.log(homeRenderCount);
    const dispatch = useDispatch();
    
    // dispatch(addHomeRender());

    
        useEffect(() =>{
            if(homeRenderCount<1){
                dispatch(fetchAsyncMovies());
                dispatch(fetchAsyncShows());
                // console.log("use Effect triggered dispatch : ", homeRenderCount);
            }

            return ()=>{
                dispatch(addHomeRender());
            }
        },[dispatch]);
  

    return (
        <div>
            <div className="banner-img"></div>
            <MovieListing />
        </div>
    );
};

export default Home;