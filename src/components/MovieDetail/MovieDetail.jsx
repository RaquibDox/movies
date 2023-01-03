import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncDetails, getAllDetails, removeDetails } from '../../features/movies/movieSlice';
import './MovieDetail.scss'

const MovieDetail = () => {
    const dispatch = useDispatch();
    const data = useSelector(getAllDetails);

    const { imdbID } = useParams();
    const id = imdbID.slice(1);

    useEffect(()=>{
        dispatch(fetchAsyncDetails(id));
        return () => {
            dispatch(removeDetails());
        }
    },[dispatch, id])

    return (
        <div className="movie-section">
            {Object.keys(data).length === 0 ?
            (<div className='loading'>Loading ...</div>
            ):(
                <>
                    <div className="section-left">
                        <div className="movie-title">{data.Title}</div>
                        <div className="movie-rating">
                            <span>
                                IMDB Rating <i className='fa fa-star'/> : &nbsp;{data.imdbRating}
                            </span>
                            <span>
                                IMDB Votes <i className='fa fa-thumbs-up'/> : &nbsp;{data.imdbVotes}
                            </span>
                            <span>
                                Runtime <i className='fa fa-film'/> : &nbsp;{data.Runtime}
                            </span>
                            <span>
                                Year <i className='fa fa-calendar'/> : &nbsp;{data.Year}
                            </span>
                        </div>
                        <div className="movie-plot">{data.Plot}</div>
                        <div className="movie-info">
                            <div>
                                <span>Director</span>
                                <span>{data.Director}</span>
                            </div>
                            <div>
                                <span>Stars</span>
                                <span>{data.Actors}</span>
                            </div>
                            <div>
                                <span>Generes</span>
                                <span>{data.Genre}</span>
                            </div>
                            <div>
                                <span>Languages</span>
                                <span>{data.Language}</span>
                            </div>
                            <div>
                                <span>Awards</span>
                                <span>{data.Awards}</span>
                            </div>
                        </div>
                    </div>
                    <div className="section-right">
                        <img src={data.Poster} alt={data.Title} />
                    </div>
                </>
            )}
        </div>
    );
};

export default MovieDetail;