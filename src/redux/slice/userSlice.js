import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    loading: true,
    users: {},
    error: ''
}

export const fetchUsers = createAsyncThunk('user/fetchUsers', (url) => {
    return axios
        .get(url)
        .then((res) => res.data)

})

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, state => {
            state.loading = true;
        })

        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
            state.error = '';
        })

        builder.addCase(fetchUsers.rejected, (state,action) => {
            state.loading = false;
            state.users = {};
            state.error = action.error.message;
        })

    }
})

export default userSlice.reducer;