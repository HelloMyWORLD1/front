import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { PayloadAction } from "@reduxjs/toolkit";
axios.defaults.baseURL = "http://129.154.58.244:8001/api";

const initialState: CommentInitialState = {
  comment: null,
  comments: null,
  //댓글 등록
  registerCommentLoading: false,
  registerCommentDone: false,
  registerCommentError: null,
  //댓글 수정
  updateCommentLoading: false,
  updateCommentDone: false,
  updateCommentError: null,
  //댓글 삭제
  deleteCommentLoading: false,
  deleteCommentDone: false,
  deleteCommentError: null,
  //댓글 조회
  getCommentLoading: false,
  getCommentDone: false,
  getCommentError: null,
};

//댓글 등록

export const registerComment = createAsyncThunk(
  "registerComment",
  async (data: postCommentType, { rejectWithValue }) => {
    try {
      axios.defaults.headers.common["Authorization"] = "";
      const JWTTOEKN = localStorage.getItem("jwtToken");
      axios.defaults.headers.common["Authorization"] = `Bearer ${JWTTOEKN}`;
      const res = await axios.post(
        `/blog/${data.blogId}/comment`,
        data.request,
        {
          // withCredentials: true,
        }
      );
      console.log(res.data);
      alert(res.data.message);
      window.location.reload();

      return res.data;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.response.data); //내부 에러처리
    }
  }
);
//댓글 수정
export const updateComment = createAsyncThunk(
  "updateComment",
  async (data: updateCommentType, { rejectWithValue }) => {
    try {
      axios.defaults.headers.common["Authorization"] = "";
      const JWTTOEKN = localStorage.getItem("jwtToken");
      axios.defaults.headers.common["Authorization"] = `Bearer ${JWTTOEKN}`;
      const res = await axios.put(
        `/blog/${data.blogId}/comment/${data.commentId}`,
        data.request,
        {
          // withCredentials: true,
        }
      );
      console.log(res.data);
      alert(res.data.message);
      window.location.reload();

      return res.data;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.response.data); //내부 에러처리
    }
  }
);
//댓글 삭제
export const deleteComment = createAsyncThunk(
  "deleteComment",
  async (data: deleteCommentType, { rejectWithValue }) => {
    try {
      axios.defaults.headers.common["Authorization"] = "";
      const JWTTOEKN = localStorage.getItem("jwtToken");
      axios.defaults.headers.common["Authorization"] = `Bearer ${JWTTOEKN}`;
      const res = await axios.delete(
        `/blog/${data.blogId}/comment/${data.commentId}`
      );
      console.log(res.data);
      alert(res.data.message);
      window.location.reload();

      return res.data;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.response.data); //내부 에러처리
    }
  }
);
//댓글 조회
export const getComment = createAsyncThunk(
  "getComment",
  async (data: getCommentType, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/blog/${data.blogId}/comments`);
      console.log(res.data);
      return res.data;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.response.data); //내부 에러처리
    }
  }
);

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: {
    //registerComment로직
    [registerComment.pending.type]: (state, action: PayloadAction<object>) => {
      state.registerCommentLoading = true;
      state.registerCommentDone = false;
      state.registerCommentError = null;
    },
    [registerComment.fulfilled.type]: (
      state,
      action: PayloadAction<object>
    ) => {
      state.registerCommentLoading = false;
      state.registerCommentDone = true;
      state.registerCommentError = null;
      state.comment = action.payload;
    },
    [registerComment.rejected.type]: (state, action: PayloadAction<object>) => {
      state.registerCommentLoading = false;
      state.registerCommentDone = false;
      state.registerCommentError = action.payload;
    },
    //upateComment
    [updateComment.pending.type]: (state, action: PayloadAction<object>) => {
      state.updateCommentLoading = true;
      state.updateCommentDone = false;
      state.updateCommentError = null;
    },
    [updateComment.fulfilled.type]: (state, action: PayloadAction<object>) => {
      state.updateCommentLoading = false;
      state.updateCommentDone = true;
      state.updateCommentError = null;
      state.comment = action.payload;
    },
    [updateComment.rejected.type]: (state, action: PayloadAction<object>) => {
      state.updateCommentLoading = false;
      state.updateCommentDone = false;
      state.updateCommentError = action.payload;
    },
    //deleteComment
    [deleteComment.pending.type]: (state, action: PayloadAction<object>) => {
      state.deleteCommentLoading = true;
      state.deleteCommentDone = false;
      state.deleteCommentError = null;
    },
    [deleteComment.fulfilled.type]: (state, action: PayloadAction<object>) => {
      state.deleteCommentLoading = false;
      state.deleteCommentDone = true;
      state.deleteCommentError = null;
      state.comment = action.payload;
    },
    [deleteComment.rejected.type]: (state, action: PayloadAction<object>) => {
      state.deleteCommentLoading = false;
      state.deleteCommentDone = false;
      state.deleteCommentError = action.payload;
    },
    //getComment
    [getComment.pending.type]: (state, action: PayloadAction<object>) => {
      state.getCommentLoading = true;
      state.getCommentDone = false;
      state.getCommentError = null;
    },
    [getComment.fulfilled.type]: (state, action: PayloadAction<object>) => {
      state.getCommentLoading = false;
      state.getCommentDone = true;
      state.getCommentError = null;
      state.comments = action.payload;
    },
    [getComment.rejected.type]: (state, action: PayloadAction<object>) => {
      state.getCommentLoading = false;
      state.getCommentDone = false;
      state.getCommentError = action.payload;
    },
  },
});

export const commentSliceActions = commentSlice.actions;
export default commentSlice.reducer;
