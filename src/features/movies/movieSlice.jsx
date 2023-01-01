import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/MovieApi";
import { APIkey } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async(movieText = "jobs") => {
    const response = await movieApi
        .get(`?apiKey=${APIkey}&s=${movieText}&type=movie`);
    // console.log( "the response from api", response.data);
    // totalLength.moviesLength = Object.keys(response.data.Search).length;
    return response.data;
});

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async(seriesText = "dark") => {
    const response = await movieApi
        .get(`?apiKey=${APIkey}&s=${seriesText}&type=series`);
    // console.log( "the response from api", response.data);
    // totalLength.showsLength = Object.keys(response.data.Search).length;
    return response.data;
});

export const fetchAsyncDetails = createAsyncThunk('movies/fetchAsyncDetails', async(id) => {
    // console.log("id :", id);
    const response = await movieApi
        .get(`?apiKey=${APIkey}&i=${id}&Plot=full`);
    // console.log( "the response from api", response.data);
    return response.data;
});

const initialState = {
    movies:{},
    shows:{},
    selectMovieOrShow:{},
    homeRendered: {
        count: 0
    },
    status: "idle"
}

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers:{
        removeDetails: (state) => {
            state.selectMovieOrShow = {};
        },
        addHomeRender: (state) =>{
            state.homeRendered.count += 1;
        },
        removeHomeRender: (state) =>{
            state.homeRendered.count = 0;
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: (state) =>{
            console.log("pending movies");
            return {...state, status: 'loading'};
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload}) =>{
            console.log("Movies Fetched Successfully");
            return {...state, movies: payload, status: 'fulfilled'};
        },
        [fetchAsyncMovies.rejected]: (state) =>{
            console.log("rejected movies");
            return {...state, status: 'rejected'};
        },
        [fetchAsyncShows.pending]: () =>{
            console.log("pending shows");
        },
        [fetchAsyncShows.fulfilled]: (state, {payload}) =>{
            console.log("Shows Fetched Successfully");
            return {...state, shows: payload}
        },
        [fetchAsyncDetails.pending]: () =>{
            console.log("pending details");
        },
        [fetchAsyncDetails.fulfilled]: (state, {payload}) =>{
            console.log("Details Fetched Successfully");
            return {...state, selectMovieOrShow: payload}
        },
    }
});

export const { removeDetails, addHomeRender, removeHomeRender } = movieSlice.actions;
export const getHomeRenderCount = (state) => state.movies.homeRendered.count;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getStatus = (state) => state.movies.status;
export const getAllDetails = (state) => state.movies.selectMovieOrShow;
export default movieSlice.reducer;