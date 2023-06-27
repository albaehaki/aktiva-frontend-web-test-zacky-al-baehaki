import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import businessReducer from "../features/yelpApiSlice/yelpApiSlice"

export const store = configureStore({
  reducer: {
    data: businessReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
