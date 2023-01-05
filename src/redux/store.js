
import { configureStore } from '@reduxjs/toolkit'

import userReducer from './slice/userSlice'
import singleuserSlice from './slice/singleuserSlice'


const store = configureStore({
    reducer: {
        singleuser: singleuserSlice,
        user: userReducer
    }
})

export default store