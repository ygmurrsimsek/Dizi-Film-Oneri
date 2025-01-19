import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    watched: [],
    toWatch: [],
}

export const WatchSlice = createSlice({
    name: 'watch',
    initialState,
    reducers: {

    }
})

// Action creators are generated for each case reducer function
// export const { } = WatchSlice.actions

export default WatchSlice.reducer