import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: []
}

const slice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        toggleFavourite: (state, action) => {
            const existingMovieIndex = state.movies.findIndex((val) => val.id === action.payload.movie.id)
            if(existingMovieIndex === -1) {
                state.movies.push(action.payload.movie)
            } else {
                state.movies.splice(existingMovieIndex, 1)
            }
        }
    }
})

export const {toggleFavourite} = slice.actions
export const favouriteReducer = slice.reducer