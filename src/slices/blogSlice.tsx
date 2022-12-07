import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { PayloadAction } from "@reduxjs/toolkit";
axios.defaults.baseURL = "http://129.154.58.244:8001/api";

const initialState: BlogInitialState = {
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
//블로그 등록
export const registerBlog = createAsyncThunk(
  "registerBlog",
  async (data: postBlogType, { rejectWithValue }) => {
    try {
      axios.defaults.headers.common["Authorization"] = "";
      const JWTTOEKN = localStorage.getItem("jwtToken");
      axios.defaults.headers.common["Authorization"] = `Bearer ${JWTTOEKN}`;
      const res = await axios.post("/blog", data, {
        withCredentials: false,
      });
      console.log(res.data);
      return res.data;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.response.data); //내부 에러처리
    }
  }
);
//블로그 전체 조회
export const getBlogAll = createAsyncThunk(
  "getBlogAll",
  async (data: getBlogAllType, { rejectWithValue }) => {
    try {
      //get 요청시 닉네임 받기 위함
      const res = await axios.get(
        `/blogs/${data.nickname}?page=${data.pageNum}`,
        {
          withCredentials: false,
        }
      );
      console.log(res.data);
      return res.data;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

//블로그 상세 조회
export const getBlog = createAsyncThunk(
  "getBlog",
  async (data: getBlogDetailType, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/blog/${data.blogId}`, {
        withCredentials: false,
      });
      console.log(res.data);
      return res.data;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);
//블로그 검색
export const searchBlog = createAsyncThunk(
  "searchBlog",
  async (data: searchBlogType, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `/blogs/search?nickname=${data.nickname}&keyword=${data.keyword}`,
        {
          withCredentials: false,
        }
      );
      console.log(res.data);
      return res.data;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.response.data); //내부 에러처리
    }
  }
);
//블로그 삭제
export const deleteBlog = createAsyncThunk(
  "deleteBlog",
  async (data: deleteBlogType, { rejectWithValue }) => {
    try {
      axios.defaults.headers.common["Authorization"] = "";
      const JWTTOEKN = localStorage.getItem("jwtToken");
      axios.defaults.headers.common["Authorization"] = `Bearer ${JWTTOEKN}`;
      const res = await axios.delete(`/blog/${data.blogId}`, {
        withCredentials: false,
      });
      console.log(res.data);
      return res.data;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.response.data); //내부 에러처리
    }
  }
);
//블로그 수정
export const updateBlog = createAsyncThunk(
  "updateBlog",
  async (data: updateBlogType, { rejectWithValue }) => {
    try {
      axios.defaults.headers.common["Authorization"] = "";
      const JWTTOEKN = localStorage.getItem("jwtToken");
      axios.defaults.headers.common["Authorization"] = `Bearer ${JWTTOEKN}`;
      const res = await axios.put(`/blog/${data.blogId}`, data.request, {
        withCredentials: true,
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
    [registerBlog.pending.type]: (state, action: PayloadAction<object>) => {
      state.registerBlogLoading = true;
      state.registerBlogDone = false;
      state.registerBlogError = null;
    },
    [registerBlog.fulfilled.type]: (state, action: PayloadAction<object>) => {
      state.registerBlogLoading = false;
      state.registerBlogDone = true;
      state.registerBlogError = null;
      state.blog = action.payload;
    },
    [registerBlog.rejected.type]: (state, action: PayloadAction<object>) => {
      state.registerBlogLoading = false;
      state.registerBlogDone = false;
      state.registerBlogError = action.payload;
    },
    //getBlogAll 로직
    [getBlogAll.pending.type]: (state, action: PayloadAction<object>) => {
      state.inquireBlogsLoading = true;
      state.inquireBlogsDone = false;
      state.inquireBlogsError = null;
    },
    [getBlogAll.fulfilled.type]: (state, action: PayloadAction<object>) => {
      state.inquireBlogsLoading = false;
      state.inquireBlogsDone = true;
      state.inquireBlogsError = null;
      state.blogs = action.payload;
    },
    [getBlogAll.rejected.type]: (state, action: PayloadAction<object>) => {
      state.inquireBlogsLoading = false;
      state.inquireBlogsDone = false;
      state.inquireBlogsError = action.payload;
    },
    //getBlog로직
    [getBlog.pending.type]: (state, action: PayloadAction<object>) => {
      state.inquireBlogLoading = true;
      state.inquireBlogDone = false;
      state.inquireBlogError = null;
    },
    [getBlog.fulfilled.type]: (state, action: PayloadAction<object>) => {
      state.inquireBlogLoading = false;
      state.inquireBlogDone = true;
      state.inquireBlogError = null;
      state.blog = action.payload;
    },
    [getBlog.rejected.type]: (state, action: PayloadAction<object>) => {
      state.inquireBlogLoading = false;
      state.inquireBlogDone = false;
      state.inquireBlogError = action.payload;
    },
    //searchBlog 로직
    [deleteBlog.pending.type]: (state, action: PayloadAction<object>) => {
      state.searchBlogLoading = true;
      state.searchBlogDone = false;
      state.searchBlogError = null;
    },
    [deleteBlog.fulfilled.type]: (state, action: PayloadAction<object>) => {
      state.searchBlogLoading = false;
      state.searchBlogDone = true;
      state.searchBlogError = null;
      state.blogs = action.payload;
    },
    [deleteBlog.rejected.type]: (state, action: PayloadAction<object>) => {
      state.searchBlogLoading = false;
      state.searchBlogDone = false;
      state.searchBlogError = action.payload;
    },
    //deleteBlog 로직
    [searchBlog.pending.type]: (state, action: PayloadAction<object>) => {
      state.deleteBlogLoading = true;
      state.deleteBlogDone = false;
      state.deleteBlogError = null;
    },
    [searchBlog.fulfilled.type]: (state, action: PayloadAction<object>) => {
      state.deleteBlogLoading = false;
      state.deleteBlogDone = true;
      state.deleteBlogError = null;
    },
    [searchBlog.rejected.type]: (state, action: PayloadAction<object>) => {
      state.deleteBlogLoading = false;
      state.deleteBlogDone = false;
      state.deleteBlogError = action.payload;
    },
    //updateBlog 로직
    [updateBlog.pending.type]: (state, action: PayloadAction<object>) => {
      state.updateBlogLoading = true;
      state.updateBlogDone = false;
      state.updateBlogError = null;
    },
    [updateBlog.fulfilled.type]: (state, action: PayloadAction<object>) => {
      state.updateBlogLoading = false;
      state.updateBlogDone = true;
      state.updateBlogError = null;
      state.blog = action.payload;
    },
    [updateBlog.rejected.type]: (state, action: PayloadAction<object>) => {
      state.updateBlogLoading = false;
      state.updateBlogDone = false;
      state.updateBlogError = action.payload;
    },
  },
});

export const blogSliceActions = blogSlice.actions;
export default blogSlice.reducer;
