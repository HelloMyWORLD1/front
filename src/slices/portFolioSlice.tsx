import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";

const initialState: PortFolioInitalState = {
    portFolio: null,
    registerPortFolioLoading: false, //포트폴리오 생성/등록
    registerPortFolioDone: false,
    registerPortFolioError: null,
    getPortFolioLoading: false, //포트폴리오 조회
    getPortFolioDone: false,
    getPortFolioError: null,
};

//Thunk 생성(비동기 처리 위한 로직)
//포트폴리오 생성(자신의 포트폴리오)
export const registerPortFolio = createAsyncThunk(
    "registerPortFolio",
    async (data, { rejectWithValue }) => {
        try {
            axios.defaults.headers.common["Authorization"] = "";
            const JWTTOEKN = localStorage.getItem("jwtToken");
            axios.defaults.headers.common["Authorization"] = `Bearer ${JWTTOEKN}`;
            const res = await axios.post("blog/register", data, {
                withCredentials: true,
            });
            console.log(res.data);

        } catch (error: any) {
            console.log(error);
            return rejectWithValue(error.response.data); //내부 에러처리
        }
    }

);
//포트폴리오 조회()

//슬라이스 생성
const portFolioSlice = createSlice({
    name: "portFolio",
    initialState,
    reducers: {},
    //비동기 통신을 위한 리듀서
    extraReducers: {
        //registerPortFolio 로직
        [registerPortFolio.pending.type]: (state, action: PayloadAction<object>) => {
            state.registerPortFolioLoading = true;
            state.registerPortFolioDone = false;
            state.registerPortFolioError = null;
        },
        [registerPortFolio.fulfilled.type]: (state, action: PayloadAction<object>) => {
            state.registerPortFolioLoading = false;
            state.registerPortFolioDone = true;
            state.registerPortFolioError = null;
            state.portFolio = action.payload;
        },
        [registerPortFolio.rejected.type]: (state, action: PayloadAction<object>) => {
            state.registerPortFolioLoading = false;
            state.registerPortFolioDone = false;
            state.registerPortFolioError = action.payload;
        }
    },
});

export const portFolioSliceActions = portFolioSlice.actions;
export default portFolioSlice.reducer;
