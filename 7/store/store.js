import { configureStore } from '@reduxjs/toolkit'
import { favouriteReducer } from './favouritesSlice'

export const store = configureStore({
    reducer: {
        favourite: favouriteReducer
    }
})