import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import api from '../../config/yelpApi';

interface BusinessSlice {
    data: null
    loading: boolean
    error: null 
}

const initialState: BusinessSlice = {
    data: null,
    loading: false,
    error: null,
}


export const fetchData = createAsyncThunk(
  'data/fetchData',
  async (params: any) => {
    try {
      const response = await api.get('/v3/businesses/search', { params });
      return response.data;
    } catch (error: any) {
        if (axios.isAxiosError(error) && error.response) {
            console.log( error.response.data);
        }
    }
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
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        // state.error = action.error?.message ?? null;
      });
  },
})

export const {  } = businessSlice.actions;
export default businessSlice.reducer;