import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import type { PayloadAction } from "@reduxjs/toolkit";

axios.defaults.baseURL = "http://129.154.58.244:8001/api";

const initialState: PortFolioInitalState = {
  test: null,
  aa: null,
  portFolio: undefined,
  portFolios: undefined,
  portFolioFieldLength: 0,
  //포트폴리오 생성/등록
  registerPortFolioLoading: false,
  registerPortFolioDone: false,
  registerPortFolioError: null,
  //포트폴리오 조회
  getPortFolioLoading: false,
  getPortFolioDone: false,
  getPortFolioError: null,
  //분야별(좋아요순) 포폴 조회
  getPortFolioLikeLoading: false,
  getPortFolioLikeDone: false,
  getPortFoiloLikeError: null,
  //분야별(최신순) 포폴 조회
  getPortFolioLatestLoading: false,
  getPortFolioLatestDone: false,
  getPortFolioLatestError: null,
  //포폴 팔로우하기
  followPortFolioLoading: false,
  followPortFolioDone: false,
  followPortFolioError: null,
  //포폴 팔로우 취소
  unFollowPortFolioLoading: false,
  unFollowPortFolioDone: false,
  unFollowPortFolioError: null,
};

//Thunk 생성(비동기 처리 위한 로직)
//포트폴리오 생성(자신의 포트폴리오)
export const registerPortFolio = createAsyncThunk(
  "registerPortFolio",
  async (data: portFolioRegisterType, { rejectWithValue }) => {
    try {
      axios.defaults.headers.common["Authorization"] = "";
      const JWTTOEKN = localStorage.getItem("jwtToken");
      axios.defaults.headers.common["Authorization"] = `Bearer ${JWTTOEKN}`;
      const res = await axios.post("/portfolio", data, {
        withCredentials: false,
      });
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
      const errors = err as Error | AxiosError;
      return errors; //내부 에러처리
    }
  }
);
//개인 포트폴리오 조회(클릭 시 이동하는 포폴 보기 위함)
export const getPortFolio = createAsyncThunk(
  "getPortFolio",
  async (data: getPortFolioType, { rejectWithValue }) => {
    try {
      //get 요청시 닉네임 받기 위함
      const res = await axios.get(`/portfolio/${data.nickname}`, {
        withCredentials: false,
      });
      console.log(res.data);
      return res.data.data;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

//포트폴리오 좋아요순(분야별) 조회
const getNicknameData = (nickname: string) => {
  return axios.get(`/user/${nickname}`).then((response) => {
    return response.data.profileUrl;
  });
};

//포트폴리오 좋아요순(분야별) 조회 Version2
export const getPortFoiloLike = createAsyncThunk(
  "getPortFoiloLike",
  async (data: getPortFoiloLikeType, { rejectWithValue }) => {
    try {
      //입력 받은 분야의 포트폴리오 정보들을 들고온다.
      const res = await axios.get(`/v2/portfolio/${data.field}/like`);
      //서버로부터 입력받은 포트폴리오 정보배열을 map을 돌린다.
      //서버의 회원관리 모델과 포트폴리오 모델을 분리하기 위함.
      //map 함수는 Array.prototype이기 때문에 await이 기다리지 않는다.
      //따라서 Promise.all 을 통해서 모든 프로미스가 이행된 후 이행하게 한다.
      const arr = await Promise.all(
        res.data.data.map(async (item: any) => {
          const nicknameData = await getNicknameData(item.nickname);
          item["profileImage"] = nicknameData;
          return item;
        })
      );
      return arr;
      //현재는 서버의 '/user/nickname' api가 잘못 되어있어서 백엔드에 수정 요청한 상황
      //토큰의 유무가 필요한 상태임 현재
      //삭제요청완료
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

//포트폴리오 최신순(분야별) 조회-> 페이지네이션(오프셋 20개)
export const getPortFolioLatest = createAsyncThunk(
  "getPortFolioLatest",
  async (data: getPortFolioLatestType) => {
    try {
      const res = await axios.get(`/portfolio/latest?page=${data.pageNum}`);
      console.log(res.data);
      return res.data;
    } catch (error: any) {
      return error;
    }
  }
);

export const getPortFolioLatestV2 = createAsyncThunk(
  "getPortFolioLatestNewVersion",
  async (data: getPortFolioLatestType) => {
    try {
      const res = await axios.get(`/v2/portfolio/latest?page=${data.pageNum}`);
      console.log(res.data);
      const arr = Promise.all(
        res.data.data.map(async (item: any) => {
          const nicknameData = await getNicknameData(item.nickname);
          item["profileImage"] = nicknameData;
          return item;
        })
      );
      return arr;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  }
);

//팔로우하기
export const followPortFolio = createAsyncThunk(
  "followPortFolio",
  async (data: FollowType, { rejectWithValue }) => {
    try {
      axios.defaults.headers.common["Authorization"] = "";
      const JWTTOEKN = localStorage.getItem("jwtToken");
      axios.defaults.headers.common["Authorization"] = `Bearer ${JWTTOEKN}`;
      const res = await axios.post("/social/follow", data, {
        withCredentials: false,
      });
      alert(res.data.message);
      window.location.reload();
    } catch (error: any) {
      return rejectWithValue(error.response.error);
    }
  }
);
//팔로우 취소
export const unFollowPortFolio = createAsyncThunk(
  "unFollowPortFolio",
  async (data: FollowType, { rejectWithValue }) => {
    try {
      axios.defaults.headers.common["Authorization"] = "";
      const JWTTOEKN = localStorage.getItem("jwtToken");
      axios.defaults.headers.common["Authorization"] = `Bearer ${JWTTOEKN}`;
      const res = await axios.post("/social/unfollow", data, {
        withCredentials: false,
      });
      alert(res.data.message);
      window.location.reload();
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const registerProfileImage = createAsyncThunk(
  "registerProfileImage",
  async (data: ProfileType, { rejectWithValue }) => {
    try {
      axios.defaults.headers.common["Authorization"] = "";
      const JWTTOEKN = localStorage.getItem("jwtToken");
      axios.defaults.headers.common["Authorization"] = `Bearer ${JWTTOEKN}`;
      await axios.post("/profileImage/upload", data.images, {
        withCredentials: false,
      });
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getPortFolioLength = createAsyncThunk(
  "getPortFolioLength",
  async (data: GetPortFolioLength, { rejectWithValue }) => {
    try {
      const res: PortFolioResponse = await axios.get(
        `/v2/portfolio/${data.field}/count`
      );
      return res.data;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);
export const getProfileImage = createAsyncThunk("getProfileImage", async () => {
  try {
    axios.defaults.headers.common["Authorization"] = "";
    const JWTTOEKN = localStorage.getItem("jwtToken");
    axios.defaults.headers.common["Authorization"] = `Bearer ${JWTTOEKN}`;
    const res = await axios.get("/profileImage", {
      withCredentials: false,
    });
    return res.data;
  } catch (error) {
    return error;
  }
});
//슬라이스 생성
const portFolioSlice = createSlice({
  name: "portFolio",
  initialState,
  reducers: {
    registerInitialize: (state) => {
      state.registerPortFolioLoading = false;
      state.registerPortFolioDone = false;
      state.registerPortFolioError = null;
    },
  },
  //비동기 통신을 위한 리듀서
  extraReducers: {
    //registerPortFolio 로직
    [registerPortFolio.pending.type]: (
      state,
      action: PayloadAction<object>
    ) => {
      state.registerPortFolioLoading = true;
      state.registerPortFolioDone = false;
      state.registerPortFolioError = null;
    },
    [registerPortFolio.fulfilled.type]: (
      state,
      action: PayloadAction<portFolioType>
    ) => {
      state.registerPortFolioLoading = false;
      state.registerPortFolioDone = true;
      state.registerPortFolioError = null;
      state.portFolio = action.payload;
    },
    [registerPortFolio.rejected.type]: (
      state,
      action: PayloadAction<object>
    ) => {
      state.registerPortFolioLoading = false;
      state.registerPortFolioDone = false;
      state.registerPortFolioError = action.payload;
    },
    //getPortFolio 로직(개인 포폴 조회)
    [getPortFolio.pending.type]: (state, action: PayloadAction<object>) => {
      state.getPortFolioLoading = true;
      state.getPortFolioDone = false;
      state.getPortFolioError = null;
    },
    [getPortFolio.fulfilled.type]: (
      state,
      action: PayloadAction<portFolioType>
    ) => {
      state.getPortFolioLoading = false;
      state.getPortFolioDone = true;
      state.getPortFolioError = null;
      state.portFolio = action.payload;
    },
    [getPortFolio.rejected.type]: (state, action: PayloadAction<object>) => {
      state.getPortFolioLoading = false;
      state.getPortFolioDone = false;
      state.getPortFolioError = action.payload;
    },
    //getPortFolioLike 로직
    [getPortFoiloLike.pending.type]: (state, action: PayloadAction<object>) => {
      state.getPortFolioLikeLoading = true;
      state.getPortFolioLikeDone = false;
      state.getPortFoiloLikeError = null;
    },
    [getPortFoiloLike.fulfilled.type]: (
      state,
      action: PayloadAction<portFoliosType[]>
    ) => {
      state.getPortFolioLikeLoading = false;
      state.getPortFolioLikeDone = true;
      state.getPortFoiloLikeError = null;
      state.portFolios = action.payload;
    },
    [getPortFoiloLike.rejected.type]: (
      state,
      action: PayloadAction<object>
    ) => {
      state.getPortFolioLikeLoading = false;
      state.getPortFolioLikeDone = false;
      state.getPortFoiloLikeError = action.payload;
    },
    //getPortFolioLatest 로직
    [getPortFolioLatest.pending.type]: (
      state,
      action: PayloadAction<object>
    ) => {
      state.getPortFolioLatestLoading = true;
      state.getPortFolioLatestDone = false;
      state.getPortFolioLatestError = null;
    },
    [getPortFolioLatest.fulfilled.type]: (
      state,
      action: PayloadAction<portFoliosType[]>
    ) => {
      state.getPortFolioLatestLoading = false;
      state.getPortFolioLatestDone = true;
      state.getPortFolioLatestError = null;
      state.portFolios = action.payload;
    },
    [getPortFolioLatest.rejected.type]: (
      state,
      action: PayloadAction<object>
    ) => {
      state.getPortFolioLatestLoading = false;
      state.getPortFolioLatestDone = false;
      state.getPortFolioLatestError = action.payload;
    },
    //followPortFolio 로직
    [followPortFolio.pending.type]: (state, action: PayloadAction<object>) => {
      state.followPortFolioLoading = true;
      state.followPortFolioDone = false;
      state.followPortFolioError = null;
    },
    [followPortFolio.fulfilled.type]: (
      state,
      action: PayloadAction<object>
    ) => {
      state.followPortFolioLoading = false;
      state.followPortFolioDone = true;
      state.followPortFolioError = null;
    },
    [followPortFolio.rejected.type]: (state, action: PayloadAction<object>) => {
      state.followPortFolioLoading = false;
      state.followPortFolioDone = false;
      state.followPortFolioError = action.payload;
    },
    //unFollowPortFolio 로직
    [unFollowPortFolio.pending.type]: (
      state,
      action: PayloadAction<object>
    ) => {
      state.unFollowPortFolioLoading = true;
      state.unFollowPortFolioDone = false;
      state.unFollowPortFolioError = null;
    },
    [unFollowPortFolio.fulfilled.type]: (
      state,
      action: PayloadAction<object>
    ) => {
      state.unFollowPortFolioLoading = false;
      state.unFollowPortFolioDone = true;
      state.unFollowPortFolioError = null;
    },
    [unFollowPortFolio.rejected.type]: (
      state,
      action: PayloadAction<object>
    ) => {
      state.unFollowPortFolioLoading = false;
      state.unFollowPortFolioDone = false;
      state.unFollowPortFolioError = action.payload;
    },
    [getProfileImage.pending.type]: (
      state,
      action: PayloadAction<object>
    ) => {},
    [getProfileImage.fulfilled.type]: (
      state,
      action: PayloadAction<object>
    ) => {
      state.test = action.payload;
    },
    [getProfileImage.rejected.type]: (
      state,
      action: PayloadAction<object>
    ) => {},
    [registerProfileImage.pending.type]: (
      state,
      action: PayloadAction<object>
    ) => {},
    [registerProfileImage.fulfilled.type]: (
      state,
      action: PayloadAction<object>
    ) => {
      state.aa = action.payload;
    },
    [registerProfileImage.rejected.type]: (
      state,
      action: PayloadAction<object>
    ) => {},
    [getPortFolioLength.pending.type]: (
      state,
      action: PayloadAction<object>
    ) => {},
    [getPortFolioLength.fulfilled.type]: (
      state,
      action: PayloadAction<PortFolioResponse>
    ) => {
      state.portFolioFieldLength = action.payload.data;
    },
    [getPortFolioLength.rejected.type]: (
      state,
      action: PayloadAction<object>
    ) => {},
    [getPortFolioLatestV2.pending.type]: (
      state,
      action: PayloadAction<object>
    ) => {},
    [getPortFolioLatestV2.fulfilled.type]: (
      state,
      action: PayloadAction<portFoliosType[]>
    ) => {
      state.portFolios = action.payload;
    },
    [getPortFolioLatestV2.rejected.type]: (
      state,
      action: PayloadAction<object>
    ) => {},
  },
});

export const portFolioSliceActions = portFolioSlice.actions;
export default portFolioSlice.reducer;
