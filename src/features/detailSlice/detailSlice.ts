import { createSlice } from "@reduxjs/toolkit";
import { Detail } from "../../pages";


interface detailType {
    id: string
}

const initialState: detailType = {
    id: "",
};

const detailSlice = createSlice({
    name: "detail",
    initialState,
    reducers: {
        addIdDetail: (state, action) => {
            state.id = action.payload;
        }
    }
})

export const { addIdDetail } = detailSlice.actions;
export default detailSlice.reducer