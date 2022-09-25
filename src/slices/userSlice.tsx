import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {};
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: {},
});

export const userSliceActions = userSlice.actions;
export default userSlice.reducer;
