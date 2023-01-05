import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    loading: true,
    singleuser: {},
    error: ''
}

export const fetchSingleUser = createAsyncThunk('singleuser/fetchSingleUser', (url) => {
    return axios
        .get(url)
        .then((res) => res.data)

})

const singleUserSlice = createSlice({
    name: 'singleuser',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchSingleUser.pending, state => {
            state.loading = true;
        })

        builder.addCase(fetchSingleUser.fulfilled, (state, action) => {
            state.loading = false;
            state.singleuser = action.payload;
            state.error = '';
        })

        builder.addCase(fetchSingleUser.rejected, (state,action) => {
            state.loading = false;
            state.singleuser = {};
            state.error = action.error.message;
        })

    }
})

export default singleUserSlice.reducer;
