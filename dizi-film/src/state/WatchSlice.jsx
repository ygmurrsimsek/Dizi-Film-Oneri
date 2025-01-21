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
        removeFilms: (state, action) => {
            const movieId = action.payload.id; // action.payload'tan id alınıyor
            console.log("Removing movie with id:", movieId);

            // Watched ve ToWatch dizilerinden filmi filtreleyerek kaldırıyoruz
            state.watched = state.watched.filter((movie) => movie.id !== movieId);
            state.toWatch = state.toWatch.filter((movie) => movie.id !== movieId);

            // LocalStorage'ı güncelle
            localStorage.setItem("watched", JSON.stringify(state.watched));
            localStorage.setItem("toWatch", JSON.stringify(state.toWatch));
        },
        moveToWatched: (state, action) => {
            const movieId = action.payload;
            const movie = state.toWatch.find((item) => item.id === movieId);
            if (movie) {
                state.toWatch = state.toWatch.filter((item) => item.id !== movieId);
                state.watched.push(movie);
            }
        },
        moveToWatch: (state, action) => {
            const movieId = action.payload;
            const movie = state.watched.find((item) => item.id === movieId);
            if (movie) {
                state.watched = state.watched.filter((item) => item.id !== movieId);
                state.toWatch.push(movie);
            }
        },

    }
})

// Action creators are generated for each case reducer function
export const { addToWatch, addWatched, removeFilms, moveToWatch, moveToWatched } = WatchSlice.actions

export default WatchSlice.reducer