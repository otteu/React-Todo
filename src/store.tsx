import { configureStore } from '@reduxjs/toolkit'
import loginSlice from "./slice/loginSlice"

const store = configureStore({
    reducer: {
        "loginSlice": loginSlice
    }
})

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>

export default store