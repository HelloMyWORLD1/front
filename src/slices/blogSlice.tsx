import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {};

const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {},
    extraReducers: {},
});

export const blogSliceActions = blogSlice.actions;
export default blogSlice.reducer;
