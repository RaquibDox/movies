import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/MovieApi";
import { APIkey } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async() => {
    const movieText = "john";
    const response = await movieApi
        .get(`?apiKey=${APIkey}&s=${movieText}&type=movie`);
    // console.log( "the response from api", response.data);
    return response.data;
});

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async() => {
    const seriesText = "dark";
    const response = await movieApi
        .get(`?apiKey=${APIkey}&s=${seriesText}&type=series`);
    // console.log( "the response from api", response.data);
    return response.data;
});

export const fetchAsyncDetails = createAsyncThunk('movies/fetchAsyncDetails', async(id) => {
    // console.log("id :", id);
    const response = await movieApi
        .get(`?apiKey=${APIkey}&i=${id}&Plot=full`);
    console.log( "the response from api", response.data);
    return response.data;
});

const initialState = {
    movies:{},
    shows:{},
    selectMovieOrShow:{}
}

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers:{
        removeDetails: (state) => {
            state.selectMovieOrShow = {};
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () =>{
            console.log("pending movies");
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload}) =>{
            console.log("Movies Fetched Successfully");
            return {...state, movies: payload}
        },
        [fetchAsyncMovies.rejected]: () =>{
            console.log("rejected movies");
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

export const { removeDetails } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getAllDetails = (state) => state.movies.selectMovieOrShow;
export default movieSlice.reducer;