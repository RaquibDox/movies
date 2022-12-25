import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/MovieApi";
import { APIkey } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async() => {
    const movieText = "jobs";
    const response = await movieApi
        .get(`?apiKey=${APIkey}&s=${movieText}&type=movie`);
    // console.log( "the response from api", response.data);
    return response.data;
});

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async() => {
    const seriesText = "dark";
    const response = await movieApi
        .get(`?apiKey=${APIkey}&s=${seriesText}&type=series`);
    console.log( "the response from api", response.data);
    return response.data;
});

const initialState = {
    movies:{},
    shows:{},
}

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers:{
        addMovies: (state, {payload}) => {
            state.movies = payload;
        },
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () =>{
            console.log("pending");
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload}) =>{
            console.log("Fetched Successfully");
            return {...state, movies: payload}
        },
        [fetchAsyncMovies.rejected]: () =>{
            console.log("rejected");
        },
        [fetchAsyncShows.fulfilled]: (state, {payload}) =>{
            console.log("Fetched Successfully");
            return {...state, shows: payload}
        },
    }
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export default movieSlice.reducer;