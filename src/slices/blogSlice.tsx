import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { PayloadAction } from "@reduxjs/toolkit";
axios.defaults.baseURL = "http://129.154.58.244:8001/api";

const initialState = {
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

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: {},
});

export const blogSliceActions = blogSlice.actions;
export default blogSlice.reducer;
