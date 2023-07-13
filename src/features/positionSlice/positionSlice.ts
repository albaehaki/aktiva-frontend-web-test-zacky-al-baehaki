import { createSlice } from "@reduxjs/toolkit";

type positionType = [number, number]
interface positionSliceType {
    position: positionType
}

const initialState: positionType = [1.3045137436059147, 103.81256103515626]



const positionSlice = createSlice({
    name: "position",
    initialState,
    reducers: {
        addNewPosition: (state, action) => {
            state[0] = action.payload[0];
            state[1] = action.payload[1];
        },
    },
})

export const { addNewPosition } = positionSlice.actions;
export default positionSlice.reducer;

