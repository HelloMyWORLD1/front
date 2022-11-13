import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { PayloadAction } from "@reduxjs/toolkit";
axios.defaults.baseURL = "http://129.154.58.244:8001/api";

const initialState :BlogInitialState= {
  blogs: null, // 사람의 전체 블로그(페이지네이션5개)를 받아올 변수
  blog: null, // 블로그의 게시글 하나를 받아올 변수
  //게시글 등록
  registerBlogLoading: false,
  registerBlogDone: false,
  registerBlogError: null,
  //게시글 삭제
  deleteBlogLoading: false,
  deleteBlogDone: false,
  deleteBlogError: null,
  //게시글 수정
  updateBlogLoading: false,
  updateBlogDone: false,
  updateBlogError: null,
  //단일 게시글(blog) 조회
  inquireBlogLoading: false,
  inquireBlogDone: false,
  inquireBlogError: null,
  //게시글 전체 조회(페이지네이션 5개씩)
  inquireBlogsLoading: false,
  inquireBlogsDone: false,
  inquireBlogsError: null,
  //전체 게시글에서 검색
  searchBlogLoading: false,
  searchBlogDone: false,
  searchBlogError: null,
};
export const registerBlog = createAsyncThunk(
  "registerBlog",
  async (data: postBlogType, { rejectWithValue }) => {
    try {
      axios.defaults.headers.common["Authorization"] = "";
      const JWTTOEKN = localStorage.getItem("jwtToken");
      axios.defaults.headers.common["Authorization"] = `Bearer ${JWTTOEKN}`;
      const res = await axios.post("/blog", data, {
        // withCredentials: true,
      });
      console.log(res.data);
      return res.data;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.response.data); //내부 에러처리
    }
  }
);

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: {
    //registerBlog 로직
    [registerBlog.pending.type]: (
      state,
      action: PayloadAction<object>
    ) => {
      state.registerBlogLoading = true;
      state.registerBlogDone = false;
      state.registerBlogError = null;
    },
    [registerBlog.fulfilled.type]: (
      state,
      action: PayloadAction<object>
    ) => {
      state.registerBlogLoading = false;
      state.registerBlogDone = true;
      state.registerBlogError = null;
      state.blog = action.payload;
    },
    [registerBlog.rejected.type]: (
      state,
      action: PayloadAction<object>
    ) => {
      state.registerBlogLoading = false;
      state.registerBlogDone = false;
      state.registerBlogError = action.payload;
    },
  },
});

export const blogSliceActions = blogSlice.actions;
export default blogSlice.reducer;
