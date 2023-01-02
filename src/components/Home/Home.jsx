import React, { useEffect } from 'react';
import MovieListing from '../MovieListing/MovieListing';
import { useDispatch, useSelector } from 'react-redux';
import { addHomeRender} from '../../features/movies/movieSlice';
import { getHomeRenderCount, getStatus} from '../../features/movies/movieSlice';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
import './Home.scss';

const Home = () => {
    const homeRenderCount = useSelector(getHomeRenderCount);
    const loadingStatus = useSelector(getStatus);
    console.log(loadingStatus);
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
            <div className="banner-img">
                <img src="https://c4.wallpaperflare.com/wallpaper/364/854/488/digital-art-photoshop-concept-art-futuristic-wallpaper-thumb.jpg" alt="" />
            </div>
            {(loadingStatus === 'fulfilled') 
            ? <MovieListing /> :
            <div className='loading'> Loading ... </div> }
        </div>
    );
};

export default Home;