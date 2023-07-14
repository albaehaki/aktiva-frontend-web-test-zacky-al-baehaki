import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { combineReducers } from "redux";
import businessReducer from "../features/yelpApiSlice/yelpApiSlice"
import positionReducer from "../features/positionSlice/positionSlice"
import detailReducer from "../features/detailSlice/detailSlice"

const rootReducer = combineReducers({
  position: positionReducer,
  data: businessReducer,
  detail: detailReducer,
});


export const store = configureStore({
  reducer: {
    reducer: rootReducer,
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
