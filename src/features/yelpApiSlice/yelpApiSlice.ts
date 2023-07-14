import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from 'axios';
import api from '../../config/yelpApi';

interface BusinessSlice {
    data: null
    loading: boolean
    error: boolean
    errorMessage: string | undefined
}

const initialState: BusinessSlice = {
    data: null,
    loading: false,
    error: false,
    errorMessage: '',
}


export const fetchData = createAsyncThunk(
  'data/fetchData',
  async ({ endpoint, params }: { endpoint: string; params: any }) => {
    // try {
      const response = await api.get('/v3/businesses/' + endpoint, { params });
      return response.data;
    // } catch (error: any) {
    //     // if (axios.isAxiosError(error) && error.response) {
    //     //     console.log( error.response.data);
    //     // }
    //     // return isRejectedWithValue(error.message)
    //     return isRejectedWithValue(null);
    // }
  }
);

const businessSlice = createSlice({
    name: "businessData",
    initialState,
    reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = false;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        console.log(action, "ini dari handle error")
        state.error = true;
        state.errorMessage = action.error.message;
      });
  },
})

export const {  } = businessSlice.actions;
export default businessSlice.reducer;