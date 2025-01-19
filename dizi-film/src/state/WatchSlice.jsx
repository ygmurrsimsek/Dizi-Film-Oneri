import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    watched: JSON.parse(localStorage.getItem('watched')) || [],
    toWatch: JSON.parse(localStorage.getItem('toWatch')) || [],
}

export const WatchSlice = createSlice({
    name: 'watch',
    initialState,
    reducers: {
        addWatched: (state, action) => {
            const movie = action.payload;
            if (!state.watched.some(item => item.id === movie.id)) {
                state.watched.push(movie);
            }
            state.toWatch = state.toWatch.filter(item => item.id !== movie.id);
        },
        addToWatch: (state, action) => {
            const movie = action.payload;
            if (!state.toWatch.some(item => item.id === movie.id)) {
                state.toWatch.push(movie);
            }
            state.watched = state.watched.filter(item => item.id !== movie.id);
        },
        removeWatched: (state, action) => {
            state.watched = state.watched.filter(movie => movie.id !== action.payload)
        },
        removeToWatch: (state, action) => {
            state.toWatch = state.toWatch.filter(movie => movie.id !== action.payload)
        },

    }
})

// Action creators are generated for each case reducer function
export const { addToWatch, addWatched } = WatchSlice.actions

export default WatchSlice.reducer