import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {};

const portFolioSlice = createSlice({
    name: "portFolio",
    initialState,
    reducers: {},
    extraReducers: {},
});

export const portFolioSliceActions = portFolioSlice.actions;
export default portFolioSlice.reducer;
