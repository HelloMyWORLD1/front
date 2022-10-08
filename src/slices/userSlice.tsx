import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { PayloadAction } from "@reduxjs/toolkit";

//const initialState : UserInitialState = {};
//위와 같은 형식으로 사용하고 Type 지정한 변수값이 다 들어가야함.

const initialState: UserInitialState = {
    user: null,
    logInLoading: false, // 로그인
    logInDone: false,
    logInError: null,
    signUpLoading: false, //회원가입
    signUpDone: false,
    signUpError: null,
    logOutLoading: false, // 로그아웃
    logOutDone: false,
    logOutError: null,
    findPasswordLoading: false, //비밀번호 찾기
    findPasswordDone: false,
    findPasswordError: null,
    inquireMyInfoLoading: false, // 로그인 후 내 정보 조회(토큰이용)
    inquireMyInfoDone: false,
    inquireMyInfoError: null,
    reviseMyInfoLoading: false, // 내정보 수정
    reviseMyInfoDone: false,
    reviseMyInfoError: null,
    deleteAccountLoading: false, // 내 계정 삭제
    deleteAccountDone: false,
    deleteAccountError: null,
};
export const logIn = createAsyncThunk(
    "logIn",
    async (data, { rejectWithValue }) => {
        try {
            const res = await axios.post("/user/logIn", data, {
                withCredentials: true,
            });
            localStorage.setItem("cookie", res.data.token.accessToken);
            const COOKIE = localStorage.getItem("cookie");
            console.log(COOKIE); // 로그인 후 쿠키가 local에 저장이 제대로 되어있는지 확인
            return res.data;
        } catch (error: any) {
            console.error(error);
            return rejectWithValue(error.response.data);
        }
    }
);

export const signUp = createAsyncThunk(
    "signUp",
    async (data, { rejectWithValue }) => {
        try {
            const res = await axios.post("/user/signUp", data, {
                withCredentials: true,
            });
            console.log(res.data);
        } catch (error: any) {
            console.error(error);
            return rejectWithValue(error.response.data);
        }
    }
);

export const logOut = createAsyncThunk(
    "logOut",
    async (data, { rejectWithValue }) => {
        try {
            axios.defaults.headers.common["Authorization"] = "";
            const COOKIE = localStorage.getItem("cookie");
            axios.defaults.headers.common["Authorization"] = `Bearer ${COOKIE}`;
            const res = await axios.post("/user/logOut", data); // data = userId
            if (res.status === 200) {
                localStorage.removeItem("cookie");
            }
        } catch (error: any) {
            // error type 미정 찾아봐야할듯.
            console.error(error);
            return rejectWithValue(error.response.data);
        }
    }
);

export const inquireMyInfo = createAsyncThunk("inquireMyInfo", async () => {
    try {
        axios.defaults.headers.common["Authorization"] = "";
        const COOKIE = localStorage.getItem("cookie");
        axios.defaults.headers.common["Authorization"] = `Bearer ${COOKIE}`;
        const res = await axios.get("/user/inquireMyInfo");
        console.log(
            "로그인 후 본인 정보 조회 / 토큰을 이용한 프론트에서 로그인 유지에도 사용될 듯 함"
        );
        console.log(res.data);
    } catch (error: any) {
        console.error(error);
    }
});
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    // 비동기 통신을 위한 리듀서
    extraReducers: {
        [logIn.pending.type]: (state, action) => {
            //처음 프론트에서 백엔드로 비동기 통신 접근 시(실행 전)
            state.logInLoading = true;
            state.logInDone = false;
            state.logInError = null;
        },
        [logIn.fulfilled.type]: (state, action) => {
            // 정상적으로 비동기 통신 완료 시(성공)
            state.logInLoading = false;
            state.logInDone = true;
            state.logInError = null;
            state.user = action.payload;
        },
        [logIn.rejected.type]: (state, action) => {
            //error 발생 시(실패)
            state.logInLoading = false;
            state.logInDone = true;
            state.logInError = null;
        },
    },
});

export const userSliceActions = userSlice.actions;
export default userSlice.reducer;
