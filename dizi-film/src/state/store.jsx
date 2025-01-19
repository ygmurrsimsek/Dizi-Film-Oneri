import { configureStore } from '@reduxjs/toolkit'
import WatchReducer from './WatchSlice';
export const store = configureStore({
    reducer: {
        watch: WatchReducer,
    },
})
store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('toWatch', JSON.stringify(state.watch.toWatch));  // toWatch listesi
    localStorage.setItem('watched', JSON.stringify(state.watch.watched));  // watched listesi
});
export default store;