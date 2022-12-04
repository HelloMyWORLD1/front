import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { PayloadAction } from "@reduxjs/toolkit";
axios.defaults.baseURL = "http://129.154.58.244:8001/api";
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
//Thunk 생성(액션들을 처리할 로직)
export const logIn = createAsyncThunk(
  "logIn", //이 값에 따라 pending(실행전), fulfilled(성공), rejected(실패)가 붙은 액션 타입이 생성된다.
  //비동기 로직의 결과를 포함하고 있는 프로미스를 반환하는 비동기 함수
  async (data: logInType, { rejectWithValue }) => {
    try {
      const res = await axios.post("/login", data, {
        withCredentials: false, //클라이언트와 서버가 토큰 값을 공유하겠다는 소리(CORS 요청 -> 클라이언트와 서버 둘다 설정해줘야함)
      });
      localStorage.setItem("jwtToken", res.data.tokenDto.token); //로컬 스토리지에 쿠키 저장
      const JWTTOKEN = localStorage.getItem("jwtToken");
      console.log(JWTTOKEN); // 로그인 후 쿠키가 local에 저장이 제대로 되어있는지 확인
      localStorage.setItem("userInfo", res.data.userDto.nickname);
      return res.data.userDto;
    } catch (error: any) {
      console.error(error);
      alert(error.response.data.errorMessage);
      return rejectWithValue(error.response.data); // 내부에서 요류 처리
    }
  }
);

export const signUp = createAsyncThunk(
  "signUp",
  async (data: signUpType, { rejectWithValue }) => {
    try {
      const res = await axios.post("/signup", data, {
        withCredentials: false,
      });
      console.log(res.data);
    } catch (error: any) {
      console.error(error);
      alert(error.response.data.errorMessage);
      return rejectWithValue(error.response.data);
    }
  }
);

export const logOut = createAsyncThunk(
  "logOut",
  async (data, { rejectWithValue }) => {
    try {
      axios.defaults.headers.common["Authorization"] = "";
      const JWTTOKEN = localStorage.getItem("jwtToken");
      axios.defaults.headers.common["Authorization"] = `Bearer ${JWTTOKEN}`;
      const res = await axios.post("/user/logOut", data); // data = userId
      if (res.status === 200) {
        localStorage.removeItem("jwtToken");
      }
    } catch (error: any) {
      // error type 미정 찾아봐야할듯.
      console.error(error);
      return rejectWithValue(error.response.data); //내부에서 오류 처리하기 위함.
    }
  }
);

export const inquireMyInfo = createAsyncThunk("inquireMyInfo", async () => {
  try {
    axios.defaults.headers.common["Authorization"] = "";
    const JWTTOEKN = localStorage.getItem("jwtToken");
    axios.defaults.headers.common["Authorization"] = `Bearer ${JWTTOEKN}`;
    const res = await axios.get("/user", {
      withCredentials: false,
    });
    return res.data;
  } catch (error: any) {
    console.error(error);
  }
});

export const deleteAccount = createAsyncThunk("deleteAccount", async () => {
  try {
    axios.defaults.headers.common["Authorization"] = "";
    const JWTTOEKN = localStorage.getItem("jwtToken");
    axios.defaults.headers.common["Authorization"] = `Bearer ${JWTTOEKN}`;
    await axios
      .delete("/user", { withCredentials: false })
      .then(() => console.log("삭제합니다."))
      .then(() => localStorage.removeItem("jwtToken"));
  } catch (error: any) {
    console.log(error);
    return error;
  }
});

export const editProfile = createAsyncThunk(
  "editProfile",
  async (data: editProfileType, { rejectWithValue }) => {
    try {
      const res = await axios.put("/signup", data, {
        withCredentials: false,
      });
      console.log(res.data);
    } catch (error: any) {
      console.error(error);
      alert(error.response.data.errorMessage);
      return rejectWithValue(error.response.data);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    simpleLogOut: (state) => {
      state.user = null;
      state.logInLoading = false;
      state.logInDone = false;
      state.logInError = null;
    },
  },
  // 비동기 통신을 위한 리듀서
  extraReducers: {
    //logIn 로직
    [logIn.pending.type]: (state, action: PayloadAction<object>) => {
      //처음 프론트에서 백엔드로 비동기 통신 접근 시(실행 전)
      state.logInLoading = true;
      state.logInDone = false;
      state.logInError = null;
    },
    [logIn.fulfilled.type]: (state, action: PayloadAction<object>) => {
      // 정상적으로 비동기 통신 완료 시(성공)
      state.logInLoading = false;
      state.logInDone = true;
      state.logInError = null;
      state.user = action.payload;
    },
    [logIn.rejected.type]: (state, action: PayloadAction<object>) => {
      //error 발생 시(실패)
      state.logInLoading = false;
      state.logInDone = false;
      state.logInError = action.payload;
    },
    //signUp 로직
    [signUp.pending.type]: (state, action: PayloadAction<object>) => {
      state.signUpLoading = true;
      state.signUpDone = false;
      state.signUpError = null;
    },
    [signUp.fulfilled.type]: (state, action: PayloadAction<object>) => {
      state.signUpLoading = false;
      state.signUpDone = true;
      state.signUpError = null;
    },
    [signUp.rejected.type]: (state, action: PayloadAction<object>) => {
      state.signUpLoading = false;
      state.signUpDone = false;
      state.signUpError = action.payload;
    },
    //logOut 로직
    [logOut.pending.type]: (state, action: PayloadAction<object>) => {
      state.logOutLoading = true;
      state.logOutDone = false;
      state.logOutError = null;
    },
    [logOut.fulfilled.type]: (state, action: PayloadAction<object>) => {
      state.logOutLoading = false;
      state.logOutDone = true;
      state.logOutError = null;
    },
    [logOut.rejected.type]: (state, action: PayloadAction<object>) => {
      state.logOutLoading = false;
      state.logOutDone = false;
      state.logOutError = action.payload;
    },
    //token을 가지고 본인 정보조회 로직
    [inquireMyInfo.pending.type]: (state, action: PayloadAction<object>) => {
      state.inquireMyInfoLoading = true;
      state.inquireMyInfoDone = false;
      state.inquireMyInfoError = null;
    },
    [inquireMyInfo.fulfilled.type]: (state, action: PayloadAction<object>) => {
      state.inquireMyInfoLoading = false;
      state.inquireMyInfoDone = true;
      state.inquireMyInfoError = null;
      state.user = action.payload;
    },
    [inquireMyInfo.rejected.type]: (state, action: PayloadAction<object>) => {
      state.inquireMyInfoLoading = false;
      state.inquireMyInfoDone = false;
      state.inquireMyInfoError = action.payload;
    },
    [deleteAccount.pending.type]: (state, action: PayloadAction<object>) => {
      state.deleteAccountLoading = true;
      state.deleteAccountDone = false;
      state.deleteAccountError = null;
    },
    [deleteAccount.fulfilled.type]: (state, action: PayloadAction<object>) => {
      state.deleteAccountLoading = false;
      state.deleteAccountDone = true;
      state.deleteAccountError = null;
      state.user = action.payload;
    },
    [deleteAccount.rejected.type]: (state, action: PayloadAction<object>) => {
      state.deleteAccountLoading = false;
      state.deleteAccountDone = false;
      state.deleteAccountError = action.payload;
    },
    //개인정보수정 로직
    [editProfile.pending.type]: (state, action: PayloadAction<object>) => {
      state.reviseMyInfoLoading = true;
      state.reviseMyInfoDone = false;
      state.reviseMyInfoError = null;
    },
    [editProfile.fulfilled.type]: (state, action: PayloadAction<object>) => {
      state.reviseMyInfoLoading = false;
      state.reviseMyInfoDone = true;
      state.reviseMyInfoError = null;
      state.user = action.payload;
    },
    [editProfile.rejected.type]: (state, action: PayloadAction<object>) => {
      state.reviseMyInfoLoading = false;
      state.reviseMyInfoDone = false;
      state.reviseMyInfoError = action.payload;
    },
  },
});

export const userSliceActions = userSlice.actions;
export default userSlice.reducer;
