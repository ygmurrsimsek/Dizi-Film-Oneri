import { configureStore } from '@reduxjs/toolkit'
import WatchReducer from './WatchSlice';
export const store = configureStore({
    reducer: {
        watch: WatchReducer,
    },
})

export default store;